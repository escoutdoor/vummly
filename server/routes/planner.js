const router = require('express').Router()
const mealPlanner = require('./../models/MealPlanner')
const ObjectId = require('mongoose').Types.ObjectId
const Recipe = require('../models/Recipe')

const getMealPlanner = async function (userId) {
	return await mealPlanner.aggregate([
		{ $match: { userId } },
		{ $unwind: { path: '$recipes', preserveNullAndEmptyArrays: true } },
		{
			$lookup: {
				from: 'recipes',
				localField: 'recipes.recipeId',
				foreignField: '_id',
				as: 'recipe',
			},
		},
		{ $sort: { 'recipes.addedToMealPlanner': -1 } },
		{
			$addFields: {
				recipes: { $arrayElemAt: ['$recipe', 0] },
			},
		},
		{
			$group: {
				_id: '$_id',
				userId: { $first: '$userId' },
				recipes: { $push: '$recipes' },
			},
		},
	])
}

router.get('/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)
		const exstplanner = await mealPlanner.findOne({ userId })

		if (!exstplanner) {
			const newPlanner = new mealPlanner({
				userId,
			})

			await newPlanner.save()
		}

		const [info] = await getMealPlanner(userId)

		res.status(200).json(info)
	} catch (error) {
		res.status(404).json(error)
	}
})

router.put('/addOrRemove/:userId/:recipeId', async (req, res) => {
	try {
		let planner = await mealPlanner.findOne({ userId: new ObjectId(req.params.userId) })

		if (!planner) {
			planner = new mealPlanner({
				userId: new ObjectId(req.params.userId),
			})
			planner.save()
		}

		if (!planner.recipes.find(recipe => recipe.recipeId.toString() === req.params.recipeId)) {
			const updated = await mealPlanner.findOneAndUpdate(
				{ userId: new ObjectId(req.params.userId) },
				{
					$push: {
						recipes: {
							recipeId: req.params.recipeId,
						},
					},
				},
				{ new: true }
			)
			res.status(200).json(updated)
		} else {
			const updated = await mealPlanner.findOneAndUpdate(
				{ userId: new ObjectId(req.params.userId) },
				{
					$pull: {
						recipes: {
							recipeId: req.params.recipeId,
						},
					},
				},
				{ new: true }
			)
			res.status(200).json(updated)
		}
	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/clear/:userId', async (req, res) => {
	try {
		const planner = await mealPlanner.findOneAndUpdate(
			{ userId: new ObjectId(req.params.userId) },
			{
				$set: {
					recipes: [],
				},
			},
			{ new: true }
		)

		res.status(200).json(planner)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/addAll/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)
		const { recipes } = req.body

		const isExists = await mealPlanner.findOne({ userId })

		if (!isExists) {
			const newPlanner = new mealPlanner({
				userId,
				recipes: recipes.map(recipe => {
					return { recipeId: new ObjectId(recipe.recipeId) }
				}),
			})

			await newPlanner.save()
		} else {
			// const recipesToAdd = recipes.filter(recipe => !isExists.recipes.find(r => r.recipeId.toString() === recipe.recipeId))

			// const planner = await mealPlanner.findOneAndUpdate(
			// 	{ userId },
			// 	{
			// 		$addToSet: {
			// 			recipes: {
			// 				$each: recipesToAdd.map(recipe => {
			// 					return { recipeId: new ObjectId(recipe.recipeId) }
			// 				}),
			// 			},
			// 		},
			// 	}
			// )

			const recipesToRemove = recipes.filter(recipe => isExists.recipes.find(r => r.recipeId.toString() === recipe.recipeId))

			const recipesToAdd = recipes.filter(recipe => !isExists.recipes.find(r => r.recipeId.toString() === recipe.recipeId))

			if (recipesToAdd.length > 0) {
				await mealPlanner.findOneAndUpdate(
					{ userId },
					{
						$addToSet: {
							recipes: {
								$each: recipesToAdd.map(recipe => {
									return { recipeId: new ObjectId(recipe.recipeId) }
								}),
							},
						},
					}
				)
			} else {
				await mealPlanner.findOneAndUpdate(
					{ userId },
					{
						$pull: {
							recipes: { recipeId: { $in: recipesToRemove.map(recipe => new ObjectId(recipe.recipeId)) } },
						},
					}
				)
			}
		}

		const [planner] = await getMealPlanner(userId)

		res.status(200).json(planner)
	} catch (error) {
		res.status(500).json(error)
	}
})

module.exports = router
