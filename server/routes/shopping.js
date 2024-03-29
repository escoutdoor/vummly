const router = require('express').Router()
const ShoppingList = require('../models/Shopping')
const Recipe = require('../models/Recipe')
const Preferences = require('../models/Preferences')
const MealPlanner = require('../models/MealPlanner')
const ObjectId = require('mongoose').Types.ObjectId

const defaultList = async function (userId) {
	return await ShoppingList.aggregate([
		{
			$match: {
				userId: userId,
			},
		},
		{
			$unwind: {
				path: '$shoppingList',
			},
		},
		{
			$lookup: {
				from: 'recipes',
				localField: 'shoppingList.recipeId',
				foreignField: '_id',
				as: 'recipe',
			},
		},
		{
			$addFields: {
				recipe: { $arrayElemAt: ['$recipe', 0] },
			},
		},
		{
			$group: {
				_id: '$recipe._id',
				recipe: { $first: '$recipe' },
				shoppingList: { $push: '$shoppingList' },
			},
		},
		{
			$addFields: {
				listLength: { $size: '$shoppingList' },
			},
		},
		{ $sort: { listLength: 1, _id: 1 } },
		{
			$project: {
				listLength: 0,
			},
		},
	])
}

router.get('/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)

		const preferences = await Preferences.findOne({ userId })

		const [shoppingList] = await ShoppingList.aggregate([
			{ $match: { userId } },
			{ $unwind: { path: '$shoppingList', preserveNullAndEmptyArrays: true } },
			{
				$sort: {
					'shoppingList.addedToShoppingList': -1,
				},
			},
			{
				$group: {
					_id: '$_id',
					shoppingList: { $push: '$shoppingList' },
					userId: { $first: '$userId' },
				},
			},
			{
				$project: {
					shoppingList: { $slice: ['$shoppingList', 5] },
				},
			},
		])

		const [suggestions] = await Recipe.aggregate([
			{
				$match: {
					'ingredients.us.ingredient': {
						$nin: preferences?.dislikedIngredients || [],
					},
				},
			},
			{ $unwind: { path: '$ingredients.metric' } },
			{ $group: { _id: null, ingredients: { $addToSet: { $toLower: '$ingredients.metric.ingredient' } } } },
			{
				$project: {
					_id: 0,
					ingredients: { $slice: ['$ingredients', 20] },
				},
			},
		])

		if (shoppingList) {
			res.status(200).json({ suggestions: suggestions.ingredients, shoppingList: shoppingList.shoppingList })
		} else {
			const createdList = new ShoppingList({
				userId,
				shoppingList: [],
			})
			await createdList.save()
			res.status(200).json({ suggestions: suggestions.ingredients, shoppingList: createdList.shoppingList })
		}
	} catch (error) {
		res.status(404).json(error)
	}
})

router.put('/:userId', async (req, res) => {
	try {
		const { name, measurement, quantity, recipeId } = req.body

		const userId = new ObjectId(req.params.userId)

		const userList = await ShoppingList.findOne({ userId })

		const sortByDate = arr => {
			return arr.shoppingList
				.sort((a, b) => new Date(b.addedToShoppingList) - new Date(a.addedToShoppingList))
				.slice(0, 5)
		}

		if (userList) {
			if (userList.shoppingList?.find(item => item.name === name)) {
				const listWithUpdatedIngredient = await ShoppingList.findOneAndUpdate(
					{ userId, 'shoppingList.name': name },
					{
						$inc: {
							'shoppingList.$.quantity': 1,
						},
						$set: {
							'shoppingList.$.addedToShoppingList': Date.now(),
							'shoppingList.$.recipeId': recipeId ? new ObjectId(recipeId) : undefined,
						},
					},
					{ new: true }
				)

				listWithUpdatedIngredient.shoppingList = sortByDate(listWithUpdatedIngredient)

				res.status(200).json(listWithUpdatedIngredient)
			} else {
				const listWithNewIngredient = await ShoppingList.findOneAndUpdate(
					{ userId },
					{
						$push: {
							shoppingList: {
								name,
								quantity: quantity !== 0 ? quantity : 1,
								measurement,
								recipeId: recipeId ? new ObjectId(recipeId) : undefined,
							},
						},
					},
					{ new: true }
				)

				listWithNewIngredient.shoppingList = sortByDate(listWithNewIngredient)

				res.status(200).json(listWithNewIngredient)
			}
		} else {
			const list = new ShoppingList({
				userId,
				shoppingList: {
					name,
					quantity: quantity !== 0 ? quantity : 1,
					measurement,
					recipeId: recipeId ? new ObjectId(recipeId) : undefined,
				},
			})

			await list.save()

			res.status(200).json(list)
		}
	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/clearList/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)

		const list = await ShoppingList.findOneAndUpdate(
			{ userId },
			{
				$set: {
					shoppingList: [],
				},
			},
			{ new: true }
		)

		res.status(200).json(list)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/delete/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)
		const { ingredientId } = req.body

		const list = await ShoppingList.findOneAndUpdate(
			{ userId },
			{
				$pull: {
					shoppingList: { _id: new ObjectId(ingredientId) },
				},
			},
			{ new: true }
		)

		res.status(200).json(list.shoppingList)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/purchase/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)

		const { ingredientId } = req.body

		const list = await ShoppingList.findOne({ userId, 'shoppingList._id': new ObjectId(ingredientId) })

		const value = list.shoppingList.find(item => item._id.toString() === ingredientId).purchased

		await ShoppingList.findOneAndUpdate(
			{ userId, 'shoppingList._id': new ObjectId(ingredientId) },
			{
				$set: {
					'shoppingList.$.purchased': !value,
				},
			}
		)

		const newList = await defaultList(userId)

		res.status(200).json(newList)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/uncheck/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)

		await ShoppingList.findOneAndUpdate(
			{ userId: new ObjectId(req.params.userId) },
			{
				$set: {
					'shoppingList.$[item].purchased': false,
				},
			},
			{
				arrayFilters: [{ 'item.purchased': true }],
			}
		)

		const list = await defaultList(userId)

		res.status(200).json(list)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/quantity/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)
		const ingredientId = new ObjectId(req.body.ingredientId)
		const quantity = Number(req.body.quantity)

		await ShoppingList.findOneAndUpdate(
			{ userId, 'shoppingList._id': ingredientId },
			{
				$set: {
					'shoppingList.$.quantity': quantity,
				},
			}
		)

		const list = await defaultList(userId)

		res.status(200).json(list)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/addAll/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)
		const ingredients = req.body.ingredients

		const userList = await ShoppingList.findOne({ userId })

		const shoppingList = ingredients.map(item => {
			return {
				name: item.name,
				measurement: item.measurement,
				quantity: item.quantity,
				recipeId: new ObjectId(item.recipeId),
			}
		})

		if (userList) {
			const ingredientsToAdd = shoppingList.filter(
				ingredient => !userList.shoppingList.find(item => item.name === ingredient.name)
			)

			await ShoppingList.findOneAndUpdate(
				{ userId },
				{
					$addToSet: {
						shoppingList: {
							$each: ingredientsToAdd.map(ingredient => ingredient),
						},
					},
				}
			)
		} else {
			const list = new ShoppingList({
				userId,
				shoppingList,
			})

			await list.save()
		}

		const list = await defaultList(userId)

		res.status(200).json(list)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.get('/ingredients/:userId', async (req, res) => {
	try {
		const [ingredients] = await Recipe.aggregate([
			{ $match: {} },
			{ $replaceRoot: { newRoot: '$ingredients' } },
			{ $unwind: { path: '$us' } },
			{
				$group: {
					_id: null,
					ingredients: { $addToSet: { $toLower: '$us.ingredient' } },
				},
			},
			{
				$project: {
					_id: 0,
					ingredients: 1,
				},
			},
		])

		res.status(200).json(ingredients.ingredients)
	} catch (error) {
		res.status(404).json(error)
	}
})

router.get('/shoppingByRecipe/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)

		const ingredients = await defaultList(userId)

		res.status(200).json(ingredients)
	} catch (error) {
		res.status(404).json(error)
	}
})

module.exports = router
