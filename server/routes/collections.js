const router = require('express').Router()
const Collection = require('../models/Collection')
const Recipe = require('../models/Recipe')
const ObjectId = require('mongoose').Types.ObjectId

router.get('/getAll/:userId', async (req, res) => {
	try {
		const collections = await Collection.find({ userId: new ObjectId(req.params.userId) })

		res.status(200).json(collections)
	} catch (error) {
		res.status(404).json(error)
	}
})

const getRecipesByOption = async q => {
	const { option, collectionId, userId } = q

	const recipes = await Collection.aggregate([
		{ $match: collectionId ? { userId, _id: collectionId } : { userId } },
		{ $unwind: { path: '$recipes' } },
		{
			$lookup: {
				from: 'recipes',
				localField: 'recipes.recipeId',
				foreignField: '_id',
				as: 'recipe',
			},
		},
		{ $unwind: { path: '$recipe' } },
		{
			$lookup: {
				from: 'reviews',
				localField: 'recipes.recipeId',
				foreignField: 'recipeId',
				as: 'review',
			},
		},
		{
			$addFields: {
				'recipe.addedToCollection': '$recipes.addedToCollection',
				'recipe.rating': { $avg: '$review.rating' },
			},
		},
		{
			$group: {
				_id: '$recipe._id',
				id: { $first: '$recipe.id' },
				title: { $first: '$recipe.title' },
				resource: { $first: '$recipe.resource' },
				nutrition: { $first: '$recipe.nutrition' },
				ingredients: { $first: '$recipe.ingredients' },
				addedToCollection: { $max: '$recipe.addedToCollection' },
				rating: { $first: '$recipe.rating' },
			},
		},
		{ $sort: option || { addedToCollection: -1 } },
	])

	return recipes
}

// all collections for recipes

router.get('/all/:id/:recipeId', async (req, res) => {
	try {
		const include = await Collection.find({ userId: req.params.id, 'recipes.recipeId': req.params.recipeId })
		const notinclude = await Collection.find({
			userId: req.params.id,
			'recipes.recipeId': { $nin: [req.params.recipeId] },
		}).exec()
		res.status(200).json({ include: include, notinclude: notinclude })
	} catch (error) {
		res.status(404).json(error)
	}
})

router.put('/:userId/:recipeId', async (req, res) => {
	try {
		const existsColl = await Collection.findOne({ userId: req.params.userId, name: req.body.name })

		if (existsColl) {
			if (!existsColl.recipes.find(r => r.recipeId.toString() === req.params.recipeId)) {
				const updated = await Collection.findOneAndUpdate(
					{ userId: req.params.userId, name: req.body.name },
					{ $push: { recipes: { recipeId: req.params.recipeId } } },
					{ new: true }
				)
				res.status(200).json(updated)
			} else {
				const deleted = await Collection.findOneAndUpdate(
					{ userId: req.params.userId, name: req.body.name },
					{ $pull: { recipes: { recipeId: req.params.recipeId } } },
					{ new: true }
				)
				res.status(200).json(deleted)
			}
		} else {
			const newColl = await new Collection({
				userId: req.params.userId,
				name: req.body.name,
				recipes: [{ recipeId: req.params?.recipeId }],
			})
			const savedColl = await newColl.save()
			res.status(200).json(savedColl)
		}
	} catch (err) {
		res.status(400).json(err)
	}
})

// get users collections

router.get('/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)
		const { sortBy } = req.query

		const option = {}

		if (sortBy === 'last modified') {
			option.updatedAt = -1
		} else if (sortBy === 'collection name') {
			option.name = 1
		} else if (sortBy === 'last created') {
			option.createdAt = -1
		}

		const collections = await Collection.aggregate([
			{ $match: { userId } },
			{
				$sort: option,
			},
			{
				$addFields: {
					recipe: { $arrayElemAt: ['$recipes', -1] },
					count: { $size: '$recipes' },
				},
			},
			{
				$lookup: {
					from: 'recipes',
					localField: 'recipe.recipeId',
					foreignField: '_id',
					as: 'recipe',
				},
			},
			{
				$addFields: {
					image: { $arrayElemAt: ['$recipe.id', 0] },
				},
			},
			{
				$project: {
					description: 0,
					recipes: 0,
					recipes: 0,
					recipe: 0,
				},
			},
		])

		res.status(200).json(collections)
	} catch (err) {
		res.status(404).json(err)
	}
})

// create a new collection

router.post('/:userId', async (req, res) => {
	try {
		const collection = new Collection({
			userId: req.params.userId,
			name: req.body.name,
			recipes: [],
		})
		const savedCollection = await collection.save()
		res.status(200).json(savedCollection)
	} catch (err) {
		res.status(400).json(err)
	}
})

// get collection and collection recipes

router.get('/getOne/:userId/:collectionName', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)
		const name = req.params.collectionName

		if (name !== 'all-vums') {
			const [collection] = await Collection.aggregate([
				{ $match: { userId, name } },
				{
					$addFields: {
						recipe: { $arrayElemAt: ['$recipes', -1] },
						count: { $size: '$recipes' },
					},
				},
				{
					$lookup: {
						from: 'recipes',
						localField: 'recipe.recipeId',
						foreignField: '_id',
						as: 'recipe',
					},
				},
				{
					$addFields: {
						image: { $arrayElemAt: ['$recipe.id', 0] },
					},
				},
				{
					$project: {
						recipes: 0,
						recipes: 0,
						recipe: 0,
					},
				},
			])
			res.status(200).json(collection)
		} else {
			const recipes = await getRecipesByOption({ option: { addedToCollection: -1 }, userId })

			const collection = {
				name: 'All Vums',
				userId: req.params.userId,
				count: recipes.length,
				image: recipes.at(0).id,
			}
			res.status(200).json(collection)
		}
	} catch (error) {
		res.status(404).json(error)
	}
})

router.get('/getCollectionRecipes/:userId/:collectionId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)
		const collectionId =
			req.params.collectionId !== 'all-vums' ? new ObjectId(req.params.collectionId) : req.params.collectionId

		const { sortBy } = req.query

		const option = {}

		if (sortBy === 'last added') {
			option.addedToCollection = -1
		} else if (sortBy === 'recipe name') {
			option.title = -1
		}

		const recipes = await getRecipesByOption(
			collectionId === 'all-vums'
				? { option: { addedToCollection: -1 }, userId }
				: { option, collectionId, userId }
		)

		res.status(200).json(recipes)
	} catch (error) {
		res.status(200).json(404)
	}
})

router.get('/recipes/:userId', async (req, res) => {
	try {
		const userId = new ObjectId(req.params.userId)

		const recipes = await Collection.aggregate([
			{ $match: { userId } },
			{ $unwind: { path: '$recipes' } },
			{
				$lookup: {
					from: 'recipes',
					localField: 'recipes.recipeId',
					foreignField: '_id',
					as: 'recipe',
				},
			},
			{ $unwind: { path: '$recipe' } },
			{
				$lookup: {
					from: 'reviews',
					localField: 'recipes.recipeId',
					foreignField: 'recipeId',
					as: 'review',
				},
			},
			{
				$addFields: {
					'recipe.addedToCollection': '$recipes.addedToCollection',
					'recipe.rating': { $avg: '$review.rating' },
				},
			},
			{
				$group: {
					_id: '$recipe._id',
					id: { $first: '$recipe.id' },
					title: { $first: '$recipe.title' },
					time: { $first: '$recipe.time' },
					resource: { $first: '$recipe.resource' },
					nutrition: { $first: '$recipe.nutrition' },
					ingredients: { $first: '$recipe.ingredients' },
					addedToCollection: { $max: '$recipe.addedToCollection' },
					rating: { $first: '$recipe.rating' },
				},
			},
			{ $sort: { addedToCollection: -1 } },
			{ $limit: 6 },
		])

		res.status(200).json(recipes)
	} catch (error) {
		res.status(404).json(error)
	}
})

// update collection

router.put('/:collectionId', async (req, res) => {
	try {
		const collectionId = new ObjectId(req.params.collectionId)
		const { data } = req.body

		const collection = await Collection.findOneAndUpdate({ _id: collectionId }, { ...data })

		res.status(200).json(collection)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.delete('/deleteOne/:collectionId', async (req, res) => {
	const collectionId = req.params.collectionId

	try {
		const deleted = await Collection.findOneAndDelete({ _id: collectionId })
		res.status(200).json(deleted)
	} catch (err) {
		res.status(400).json(err)
	}
})

module.exports = router
