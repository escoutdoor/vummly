const router = require('express').Router();
const Collection = require('../models/Collection')
const Recipe = require('../models/Recipe')


router.get('/all/:id/:recipeId', async (req, res) => {
    try {
        const include = await Collection.find({userId: req.params.id, recipes: {$elemMatch: {$eq: req.params.recipeId}}}).exec();
        const notinclude = await Collection.find({userId: req.params.id, recipes: {$nin : [req.params.recipeId]}}).exec();
        res.status(200).json({include : include, notinclude : notinclude})
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get('/all/:id', async (req, res) => {
    try {
        const collections = await Collection.find({userId: req.params.id})
        res.status(200).json(collections)
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
        const recipeIds = await collections.flatMap((c) => c.recipes).filter((value, index, self) => self.indexOf(value) === index)
        const recipes = await Recipe.find({_id: {$in : recipeIds}})
        const sortedLastAdded = recipeIds.map((recipeId) => {
            return recipes.find((r) => r._id.toString() === recipeId);
        }).reverse()
        const collectionsLastModified = await Collection.find({userId: req.params.userId}).sort({updatedAt: -1})
        const collectionsLastCreated = await Collection.find({userId: req.params.userId}).sort({createdAt: -1})
        const collectionsName = await Collection.find({userId: req.params.userId}).sort({name: -1})
        res.status(200).json({recipes: sortedLastAdded, collectionsLastModified, collectionsLastCreated, collectionsName})
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
        const recipes = await Recipe.find({_id: {$in: collection.recipes}}).sort({name: -1})
        const sortedLastAdded = collection.recipes.map((recipeId) => {
            return recipes.find((r) => r._id.toString() === recipeId);
        })
        res.status(200).json({collection, recipesLast: sortedLastAdded, recipesName: recipes})
    } catch (err) {
        res.status(404).json(err)
    }
})




// change collection name


router.put('/name/:collectionId/:userId', async (req, res) => {
    try {
        const collection = await Collection.findOneAndUpdate({_id: req.params.collectionId, userId: req.params.userId}, {$set: {name: req.body.name}}, {new: true})
        res.status(200).json(collection)
    } catch (err) {
        res.status(400).json(err)
    }
})


// change collection description

router.put('/description/:collectionId/:userId', async (req, res) => {
    try {
        const collection = await Collection.findOneAndUpdate({_id: req.params.collectionId, userId: req.params.userId}, {$set: {description: req.body.description}}, {new: true})
        res.status(200).json(collection)
    } catch (err) {
        res.status(400).json(err)
    }
})


// delete collection

router.delete('/deleteOne/:collectionId', async (req, res) => {
    try {
        const deleted = await Collection.findOneAndDelete({_id: req.params.collectionId})
        res.status(200).json(deleted)
    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router