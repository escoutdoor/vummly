const router = require('express').Router();
const Collection = require('../models/Collection')


router.get('/all/:id', async (req, res) => {
    try {
        const collections = await Collection.find({userId: req.params.id})
        res.status(200).json(collections)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.put('/createOne', async (req, res) => {
    try {
        const collection = new Collection({
            userId: req.body.userId,
            name: req.body.name,
            recipes: [req.body?.recipeId]
        })
        await collection.save()
        res.status(200).json(collection)
    } catch (error) {
        res.status(404).json(error)
    }
})





module.exports = router