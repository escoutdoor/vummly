const router = require('express').Router()
const Recipe = require('../models/Recipe')
const ObjectId = require('mongoose').Types.ObjectId
const Collection = require('../models/Collection')
const Preferences = require('../models/Preferences')

// get all recipe info

router.get('/getOne/:recipeId', async (req, res) => {
	try {
		const userId = new ObjectId(req.query?.userId) || ''

		const [recipe] = await Recipe.aggregate([
			{ $match: { id: req.params.recipeId } },
			{
				$facet: {
					relatedRecipes: [
						{
							$lookup: {
								from: 'recipes',
								localField: 'tags',
								foreignField: 'tags',
								as: 'recipes',
							},
						},
						{ $unwind: { path: '$recipes' } },
						{ $match: { 'recipes.id': { $ne: req.params.recipeId } } },
						{ $replaceRoot: { newRoot: '$recipes' } },
						{ $sample: { size: 4 } },
					],
					moreFromResource: [
						{
							$lookup: {
								from: 'recipes',
								localField: 'resource.link',
								foreignField: 'resource.link',
								as: 'recipes',
							},
						},
						{ $unwind: { path: '$recipes' } },
						{ $match: { 'recipes.id': { $ne: req.params.recipeId } } },
						{ $replaceRoot: { newRoot: '$recipes' } },
						{ $sample: { size: 4 } },
					],
					recipe: [
						{
							$lookup: {
								from: 'reviews',
								localField: '_id',
								foreignField: 'recipeId',
								as: 'reviews',
							},
						},
						{ $unwind: { path: '$reviews', preserveNullAndEmptyArrays: true } },
						{
							$lookup: {
								from: 'users',
								localField: 'reviews.userId',
								foreignField: '_id',
								as: 'users',
							},
						},
						{
							$lookup: {
								from: 'collections',
								localField: '_id',
								foreignField: 'recipes.recipeId',
								as: 'collections',
							},
						},
						{
							$addFields: {
								rating: { $avg: '$reviews.rating' },
								'reviews.user': { $arrayElemAt: ['$users', 0] },
								collections: { $size: '$collections' },
							},
						},
						{ $sort: { 'reviews.createdAt': -1 } },
						{
							$group: {
								_id: '$_id',
								id: { $first: '$id' },
								title: { $first: '$title' },
								time: { $first: '$time' },
								resource: { $first: '$resource' },
								nutrition: { $first: '$nutrition' },
								tags: { $first: '$tags' },
								servings: { $first: '$servings' },
								ingredients: { $first: '$ingredients' },
								reviews: { $push: '$reviews' },
								rating: { $avg: '$rating' },
								collections: { $first: '$collections' },
							},
						},
						{
							$lookup: {
								from: 'mealplanners',
								localField: '_id',
								foreignField: 'recipes.recipeId',
								as: 'planner',
							},
						},
						{
							$addFields: {
								usersWithThisRecipe: '$planner.userId',
							},
						},
						{
							$project: {
								id: 1,
								title: 1,
								time: 1,
								resource: 1,
								nutrition: 1,
								tags: 1,
								servings: 1,
								ingredients: 1,
								reviews: 1,
								rating: 1,
								collections: 1,
								isAdded: { $in: [userId, '$usersWithThisRecipe'] },
							},
						},
					],
				},
			},
			{
				$project: {
					recipe: { $arrayElemAt: ['$recipe', 0] },
					related: '$relatedRecipes',
					more: '$moreFromResource',
				},
			},
		])

		res.status(200).json(recipe)
	} catch (err) {
		res.status(404).json(err)
	}
})

router.get('/all/:id/:recipeId', async (req, res) => {
	try {
		const include = await Collection.find({ userId: req.params.id, 'recipes.recipeId': req.params.recipeId })
		const notinclude = await Collection.find({ userId: req.params.id, 'recipes.recipeId': { $nin: [req.params.recipeId] } })
		res.status(200).json({ include: include, notinclude: notinclude })
	} catch (error) {
		res.status(404).json(error)
	}
})

// recipe search

router.get('/recipes', async (req, res) => {
	try {
		const { allowed, banned, nutrition, sort, time } = req.query
		const allowedArray = allowed ? allowed.replaceAll('_', ' ').split('-') : []
		const bannedArray = banned ? banned.replaceAll('_', ' ').split('-') : []

		const recipes = await Recipe.aggregate([
			{
				$match: {
					$and: [
						allowedArray.length > 0 ? { 'ingredients.us.ingredient': { $all: allowedArray } } : {},
						bannedArray.length > 0 ? { 'ingredients.us.ingredient': { $nin: bannedArray } } : {},
						nutrition.length > 0 ? { tags: { $in: [nutrition] } } : {},
						Number(time) > 0 ? { time: { $lt: Number(time) } } : {},
					],
				},
			},
			{
				$lookup: {
					from: 'reviews',
					localField: '_id',
					foreignField: 'recipeId',
					as: 'reviews',
				},
			},
			{
				$lookup: {
					from: 'collections',
					localField: '_id',
					foreignField: 'recipes.recipeId',
					as: 'collections',
				},
			},
			{
				$addFields: {
					rating: {
						$avg: '$reviews.rating',
					},
					collections: {
						$size: '$collections.recipes.recipeId',
					},
				},
			},
			{
				$project: {
					reviews: 0,
				},
			},
			{ $sort: sort === 'relevance' ? { rating: -1 } : sort === 'popular' ? { collections: -1 } : sort === 'time' ? { time: 1 } : {} },
		])
		res.status(200).json(recipes)
	} catch (err) {
		res.status(404).json(err)
	}
})

router.get(`/all`, async (req, res) => {
	const { userId } = req.query

	try {
		if (userId) {
			const preferences = await Preferences.findOne({ userId: new ObjectId(userId) })
			const recipes = await Recipe.aggregate([
				{
					$addFields: {
						'ingredients.us': {
							$map: {
								input: '$ingredients.us',
								as: 'item',
								in: {
									$mergeObjects: ['$$item', { ingredient: { $toLower: '$$item.ingredient' } }],
								},
							},
						},
					},
				},
				{
					$match: {
						'ingredients.us.ingredient': {
							$nin: preferences?.dislikedIngredients || [],
						},
					},
				},
				{
					$lookup: {
						from: 'reviews',
						localField: '_id',
						foreignField: 'recipeId',
						as: 'reviews',
					},
				},
				{
					$lookup: {
						from: 'collections',
						localField: '_id',
						foreignField: 'recipes.recipeId',
						as: 'collections',
					},
				},
				{
					$addFields: {
						rating: {
							$avg: '$reviews.rating',
						},
						collections: {
							$size: '$collections.recipes.recipeId',
						},
					},
				},
				{
					$project: {
						reviews: 0,
					},
				},
			])
			res.status(200).json(recipes)
		} else {
			const recipes = await Recipe.find({})
			res.status(200).json(recipes)
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// page

router.get('/page/:page', async (req, res) => {
	try {
		const page = await Recipe.aggregate([
			{ $match: { 'resource.link': req.params.page } },
			{
				$lookup: {
					from: 'reviews',
					localField: '_id',
					foreignField: 'recipeId',
					as: 'reviews',
				},
			},
			{
				$addFields: {
					rating: {
						$avg: '$reviews.rating',
					},
				},
			},
			{
				$project: {
					reviews: 0,
					time: 0,
					nutrition: 0,
					servings: 0,
				},
			},
		])
		res.status(200).json(page)
	} catch (err) {
		res.status(500).json(err)
	}
})

// meal planner vums

router.get('/vums/:userId', async (req, res) => {
	try {
		const collections = await Collection.aggregate([
			{ $match: { userId: new ObjectId(req.params.userId) } },
			{
				$project: {
					description: 0,
				},
			},
			{ $unwind: { path: '$recipes' } },
			{
				$lookup: {
					from: 'recipes',
					localField: 'recipes.recipeId',
					foreignField: '_id',
					as: 'recipes',
				},
			},
			{ $unwind: { path: '$recipes' } },
			{
				$group: {
					_id: '$_id',
					userId: { $first: '$userId' },
					name: { $first: '$name' },
					recipes: { $push: '$recipes' },
					updatedAt: { $first: '$updatedAt' },
				},
			},
			{ $sort: { updatedAt: -1 } },
		])

		res.status(200).json(collections)
	} catch (error) {
		res.status(500).json(error)
	}
})

// recommendations meal planner

router.get('/recommendationsByTags/:userId', async (req, res) => {
	const { limit } = req.query

	try {
		const preferences = await Preferences.findOne({
			userId: new ObjectId(req.params.userId),
		})

		const collections = await Recipe.aggregate([
			{
				$addFields: {
					'ingredients.us': {
						$map: {
							input: '$ingredients.us',
							as: 'item',
							in: {
								$mergeObjects: ['$$item', { ingredient: { $toLower: '$$item.ingredient' } }],
							},
						},
					},
				},
			},
			{
				$match: {
					'ingredients.us.ingredient': {
						$nin: preferences?.dislikedIngredients || [],
					},
				},
			},
			{ $unwind: { path: '$tags' } },
			{
				$addFields: {
					name: '$tags',
				},
			},
			{
				$lookup: {
					from: 'reviews',
					localField: '_id',
					foreignField: 'recipeId',
					as: 'reviews',
				},
			},
			{
				$lookup: {
					from: 'collections',
					localField: '_id',
					foreignField: 'recipes.recipeId',
					as: 'collections',
				},
			},
			{
				$addFields: {
					rating: {
						$avg: '$reviews.rating',
					},
					collections: {
						$size: '$collections.recipes.recipeId',
					},
				},
			},
			{
				$group: {
					_id: '$name',
					recipes: { $push: '$$ROOT' },
				},
			},
			{
				$addFields: {
					name: '$_id',
					count: { $size: '$recipes' },
				},
			},
			{
				$project: {
					_id: 0,
					'recipes.name': 0,
					'recipes.reviews': 0,
				},
			},
			{ $sort: { count: -1 } },
			{ $limit: Number(limit) },
		])

		res.status(200).json(collections)
	} catch (error) {
		res.status(404).json(error)
	}
})

module.exports = router
