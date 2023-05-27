const router = require('express').Router();
const Category = require('../models/Category')


router.post('/postCategory' , async (req, res) => {
    const newCategory = await new Category(req.body)
    try {
        const saveCategory = await newCategory.save()
        res.status(200).json(saveCategory)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/get-category/:idPage' , async (req, res) => {
    try {
		const category = await Category.findOne({idPage: req.params.idPage})
        res.status(200).json(category)
	} catch (err) {
		res.status(500).json(err)
	}
})


module.exports = router;
