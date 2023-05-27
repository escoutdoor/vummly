const router = require('express').Router()
const Section = require('../models/Section');

router.get('/:section', async (req, res) => {
	try {
		const section = await Section.findOne({own: req.params.section})
        res.status(200).json(section)
	} catch (err) {
		res.status(500).json(err)
	}
})

router.post('/create', async (req, res) => {
    const newSection  = await new Section(req.body)
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