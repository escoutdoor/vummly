const router = require('express').Router()
const Article = require('./../models/Article')

// get an article

router.get('/getOne/:id', async (req, res) => {
	const id = req.params.id

	try {
		const [article] = await Article.aggregate([
			{ $match: { id } },
			{
				$lookup: {
					from: 'sections',
					localField: 'id',
					foreignField: 'list.articleId',
					as: 'section',
				},
			},
			{
				$addFields: {
					section: { $arrayElemAt: ['$section', 0] },
				},
			},
			{
				$addFields: {
					categoryId: '$section.categoryId',
					categoryName: '$section.categoryName',
					section: '$section.list',
				},
			},
		])

		res.status(200).json(article)
	} catch (error) {
		res.status(404).json(error)
	}
})

router.get('/getAll', async (req, res) => {
	try {
		const { category } = req.query

		const articles = await Article.aggregate([
			{
				$lookup: {
					from: 'sections',
					localField: 'id',
					foreignField: 'list.articleId',
					as: 'section',
				},
			},
			{
				$match: category ? { 'section.categoryId': category } : {},
			},
			{
				$addFields: {
					section: { $arrayElemAt: ['$section', 0] },
				},
			},
			{
				$addFields: {
					categoryId: '$section.categoryId',
					categoryName: '$section.categoryName',
				},
			},
			{
				$project: {
					section: 0,
				},
			},
		])

		res.status(200).json(articles)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
