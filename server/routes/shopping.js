const router = require('express').Router()
const ShoppingList = require('../models/Shopping')
const Recipe = require('../models/Recipe')
const Preferences = require('../models/Preferences')
const ObjectId = require('mongoose').Types.ObjectId

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
		const { name, measurement, quantity } = req.body
		const userId = new ObjectId(req.params.userId)

		const userList = await ShoppingList.findOne({ userId })

		const sortByDate = arr => {
			return arr.shoppingList.sort((a, b) => new Date(b.addedToShoppingList) - new Date(a.addedToShoppingList)).slice(0, 5)
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
							},
						},
					},
					{ new: true }
				)

				listWithNewIngredient.shoppingList = sortByDate(listWithNewIngredient)

				res.status(200).json(listWithNewIngredient)
			}
		} else {
			const createdList = new ShoppingList({
				userId,
				shoppingList: [{ name, measurement, quantity: quantity !== 0 ? quantity : 1 }],
			})
			await createdList.save()
			res.status(200).json(createdList)
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

module.exports = router
