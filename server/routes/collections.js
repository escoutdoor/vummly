const router = require('express').Router();
const Collection = require('../models/Collection')
const Recipe = require('../models/Recipe')


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


router.get('/getOne/:collectionId', async (req, res) => {
    try {
        const collection = await Collection.findOne({_id: req.params.collectionId})
        res.status(200).json(collection)
    } catch (error) {
        res.status(400).json(error)
    }
})


router.put('/:userId/:recipeId', async (req, res) => {
    try {
        const existsColl = await Collection.findOne({userId: req.params.userId, name: req.body.collectionName})

        if(existsColl) {
            if(!existsColl.recipes.includes(req.params.recipeId)) {
                const updated = await Collection.findOneAndUpdate({userId: req.params.userId, name: req.body.collectionName}, {$push: {recipes: req.params.recipeId}}, {new: true})
                res.status(200).json(updated)
            } else {
                const deleted = await Collection.findOneAndUpdate({userId: req.params.userId, name: req.body.collectionName}, {$pull: {recipes: req.params.recipeId}}, {new: true})
                res.status(200).json(deleted)
            }
        } else {
            const newColl = await new Collection({
                userId: req.params.userId,
                name: req.body.collectionName,
                recipes: [req.params?.recipeId]
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
        const collections = await Collection.find({userId: req.params.userId})
        const recipeIds = collections.flatMap((c) => c.recipes);
        const recipes = await Recipe.find({_id: {$in : recipeIds}})
        res.status(200).json({recipes, collections})
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
            recipes: []
        }) 
        const savedCollection =  await collection.save()
        res.status(200).json(savedCollection)
    } catch (err) {
        res.status(400).json(err)
    }
})


// get collection and collection recipes

router.get('/getCollection/:userId/:collectionName', async (req, res) => {
    try {
        const collection = await Collection.findOne({userId : req.params.userId, name: req.params.collectionName})
        const recipes = await Recipe.find({_id: {$in: collection.recipes}})
        res.status(200).json({collection: collection, recipes: recipes})
    } catch (err) {
        res.status(404).json(err)
    }
})



module.exports = router