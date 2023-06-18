const router = require('express').Router();
const Collection = require('../models/Collection')
const Recipe = require('../models/Recipe')
const ObjectId = require('mongoose').Types.ObjectId


// all collections for recipes

router.get('/all/:id/:recipeId', async (req, res) => {
    try {
        const include = await Collection.find({userId: req.params.id, 'recipes.recipeId':  req.params.recipeId})
        const notinclude = await Collection.find({userId: req.params.id, 'recipes.recipeId': {$nin : [req.params.recipeId]}}).exec();
        res.status(200).json({include : include, notinclude : notinclude})
    } catch (error) {
        res.status(404).json(error)
    }
})


router.put('/:userId/:recipeId', async (req, res) => {
    try {
        const existsColl = await Collection.findOne({userId: req.params.userId, name: req.body.collectionName})

        if(existsColl) {
            if(!existsColl.recipes.find(r => r.recipeId.toString() === req.params.recipeId)) {
                const updated = await Collection.findOneAndUpdate({userId: req.params.userId, name: req.body.collectionName}, {$push: {recipes : {recipeId: req.params.recipeId}}}, {new: true})
                res.status(200).json(updated)
            } else {
                const deleted = await Collection.findOneAndUpdate({userId: req.params.userId, name: req.body.collectionName}, {$pull: {recipes : {recipeId: req.params.recipeId}}}, {new: true})
                res.status(200).json(deleted)
            }
        } else {
            const newColl = await new Collection({
                userId: req.params.userId,
                name: req.body.collectionName,
                recipes: [{recipeId: req.params?.recipeId}]
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
        const collections = await Collection.find({userId: req.params.userId}).sort({name: 1})
        const recipeIds = collections.flatMap((c) => c.recipes).sort((a, b) => new Date(b.addedToCollection) - new Date(a.addedToCollection))
        const uniqueList = recipeIds.flatMap((r) => r.recipeId.toString()).filter((x, i, a) => a.indexOf(x) === i)
        const recipes = await Recipe.aggregate([
            {$match: {_id: {$in : [...recipeIds.flatMap((r) => r.recipeId)]}}},
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'recipeId',
                    as: 'reviews'
                }
            },
            {   $addFields: {
                    rating: {
                        $avg: '$reviews.rating'
                    }
                }
            },
            {$group: {
                _id: "$_id",
                id: {"$first": "$id"},
                resource: {"$first": "$resource"},
                title: {"$first" : "$title"},
                ingredients: {"$first" : "$ingredients"},
                rating: {"$first" : "$rating"}
            }},
            {
                $project: {
                    reviews: 0,
                    time: 0,
                    nutrition: 0,
                    servings: 0,
                }
            },
        ])
        const sortedLastAdded = uniqueList.map((rid) => {
            return recipes.find((r) => r._id.toString() === rid);
        })
        const collectionsLastModified = await Collection.find({userId: req.params.userId}).sort({updatedAt: -1})
        const collectionsLastCreated = await Collection.find({userId: req.params.userId}).sort({createdAt: -1})
        res.status(200).json({recipes: sortedLastAdded, collectionsLastModified, collectionsLastCreated, collectionsName: collections})
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
        if(req.params.collectionName === 'all-vums') {
            const rcpids = await Collection.aggregate([
                {$match:  {userId: req.params.userId}},
                {$unwind: {path: "$recipes", preserveNullAndEmptyArrays: false}},
                {$group: {_id: '$recipes.recipeId', addedToCollection: { "$first": "$recipes.addedToCollection" }}},
                {$sort : {"addedToCollection" : 1}}
            ])

            const idsSorted = rcpids.flatMap((r) => r).sort((a, b) => new Date(b.addedToCollection) - new Date(a.addedToCollection)).flatMap((i) => i._id)

            const recipesName = await Recipe.aggregate([
                {$match: {_id: {$in : idsSorted}}},
                {$sort: {title: -1}}
            ])

            const collection = {
                name: 'All Yums',
                userId: req.params.userId
            }

            const recipesLast = idsSorted.map((rci) => {
                return recipesName.find((r) => r._id.toString() === rci.toString());
            })

            res.status(200).json({collection, recipesLast, recipesName})
        } else {
            const collection = await Collection.findOne({userId : req.params.userId, name: req.params.collectionName}).sort({name: 1})
            const recipes = await Recipe.aggregate([
                {$match: {_id: {$in: [...collection.recipes.flatMap((r) => r.recipeId)]}}},
                {
                    $lookup: {
                        from: 'reviews',
                        localField: "_id",
                        foreignField: 'recipeId',
                        as: 'reviews'
                    }
                },
                {
                    $addFields: {
                        rating : {
                            $avg: '$reviews.rating'
                        }
                    }
                },
                {
                    $sort: {title: 1},
                },
                {
                    $project: {
                        reviews : 0
                    }
                },
            ])
            const recipesLast = collection.recipes.map((rci) => {
                return recipes.find((r) => r._id.toString() === rci.recipeId.toString());
            }).reverse()
            res.status(200).json({collection, recipesLast, recipesName: recipes})
        } 
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