const router = require('express').Router()
const mealPlanner = require('./../models/MealPlanner')
const ObjectId = require('mongoose').Types.ObjectId
const Recipe = require('../models/Recipe')

router.get('/:userId', async (req, res) => {
	try {
		let [planner] = await mealPlanner.aggregate([
			{ $match: { userId: new ObjectId(req.params.userId) } },
			{ $unwind: { path: '$recipes' } },
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

		// if (!planner[0]._id && req.params.userId) {
		// 	planner = new mealPlanner({
		// 		userId: new ObjectId(req.params.userId),
		// 	})
		// 	await planner.save()
		// }

		res.status(200).json(planner)
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

module.exports = router
