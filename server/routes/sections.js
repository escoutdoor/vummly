const router = require('express').Router()
const Section = require('../models/Section')

router.get('/:categoryId', async (req, res) => {
	try {
		const categoryId = req.params.categoryId

		const category = await Section.find({ categoryId }, { categoryId: 0 })

		res.status(200).json(category)
	} catch (err) {
		res.status(500).json(err)
	}
})

router.post('/create', async (req, res) => {
	const newSection = await new Section(req.body)
	try {
		const saveArticle = await newSection.save()
		res.status(200).json(saveArticle)
	} catch (error) {
		res.status(500).json(error)
	}
})

// get all

router.get('/', async (req, res) => {
	try {
		const data = await Section.find({})
		res.status(200).json([...data])
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
