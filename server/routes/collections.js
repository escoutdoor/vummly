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
        const collections = await Collection.aggregate([
            {$match: {userId: new ObjectId(req.params.userId)}},
            {$facet : {
                byName: [
                    {$sort: {name: 1}},
                    {$project: {
                        description: 0
                    }}
                ],
                lastModified: [
                    {$sort: {updatedAt: -1}},
                    {$project: {
                        description: 0
                    }}
                ],
                lastCreated: [
                    {$sort: {createdAt: -1}},
                    {$project: {
                        description: 0
                    }}
                ]
            }}
        ])
        
        const recipes = await Collection.aggregate([
            {$match: { userId: new ObjectId(req.params.userId)}},
            {$unwind: { path: "$recipes"}},
            {
                $lookup: {
                    from: "recipes",
                    localField: "recipes.recipeId",
                    foreignField: "_id",
                    as: "recipe"
            }
            },
            {$unwind: {path: "$recipe"}},
            {
                $addFields: {
                    "recipe.addedToCollection": { $toDate: "$recipes.addedToCollection" }
                }
            },
            {
                $group: {
                    _id: "$recipe._id",
                    id: {"$first" : "$recipe.id"},
                    title: {"$first" :"$recipe.title"},
                    time: {"$first" :"$recipe.time"},
                    resource: {"$first" :"$recipe.resource",},
                    nutrition: {"$first" :"$recipe.nutrition",},
                    ingredients: {"$first" :"$recipe.ingredients",},
                    addedToCollection: {"$first" :"$recipe.addedToCollection"},
                }
            },
            {$sort: { addedToCollection: -1, _id: 1 }}
        ]);
        res.status(200).json({recipes, collectionsLastModified: collections[0].lastModified, collectionsLastCreated: collections[0].lastCreated, collectionsName: collections[0].byName})
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
            const collection = {
                name: 'All Vums',
                recipeId: req.params.userId
            }
            const recipes = await Collection.aggregate([
                {$match: { userId: new ObjectId(req.params.userId)}},
                {$unwind: { path: "$recipes"}},
                {
                    $lookup: {
                        from: "recipes",
                        localField: "recipes.recipeId",
                        foreignField: "_id",
                        as: "recipe"
                }
                },
                {$unwind: {path: "$recipe"}},
                {$lookup: {
                    from : "reviews",
                    localField: "recipes.recipeId",
                    foreignField: "recipeId",
                    as: "review"
                }},
                {
                    $addFields: {
                        "recipe.addedToCollection": { $toDate: "$recipes.addedToCollection" },
                        "recipe.rating": {$avg: "$review.rating"}
                    }
                },
                {
                    $addFields: {
                        "rating" : {$avg : "$review.rating"}
                    }
                },
                {
                    $group: {
                        _id: "$recipe._id",
                        id: {"$first" : "$recipe.id"},
                        title: {"$first" :"$recipe.title"},
                        time: {"$first" :"$recipe.time"},
                        resource: {"$first" :"$recipe.resource",},
                        nutrition: {"$first" :"$recipe.nutrition",},
                        ingredients: {"$first" :"$recipe.ingredients",},
                        addedToCollection: {"$first" :"$recipe.addedToCollection"},
                        rating: {"$first" : "$recipe.rating"}
                    }
                },
                {$sort: { addedToCollection: -1, _id: 1 }}
            ]);
            res.status(200).json({collection, recipesLastAdded : recipes, recipesName : recipes})
        } else {
            const collection = await Collection.aggregate([
                {$match: {userId : new ObjectId(req.params.userId), name: req.params.collectionName}},
                {$project: {
                    userId: 1,
                    name: 1,
                    description: 1
                }},
            ])
            const recipes = await Collection.aggregate([
                {$match: {
                        userId: new ObjectId(req.params.userId),
                        name: req.params.collectionName
                }},
                {$unwind: {path: "$recipes"}},
                {$lookup: {
                    from : "recipes",
                    localField: "recipes.recipeId",
                    foreignField: "_id",
                    as: "recipe"
                }},
                {
                    $addFields: {
                        "recipe.addedToCollection" : "$recipes.addedToCollection"
                    }
                },
                {$unwind: {
                    path: "$recipe"
                }},
                {$lookup: {
                    from : "reviews",
                    localField: "recipes.recipeId",
                    foreignField: "recipeId",
                    as: "review"
                }},
                {
                    $addFields: {
                        "recipe.rating" : {$avg : "$review.rating"}
                    }
                },
                {$project: {
                    review: 0
                }},
                {$replaceRoot: {newRoot: "$recipe"}},
                {$facet: {
                    "lastAdded" : [
                        {$sort: {addedToCollection: -1, _id: 1}}
                    ],
                    "byName" : [
                        {$sort: {title: -1, _id: 1}},
                        {$project: {
                            addedToCollection: 0
                        }}
                    ]
                }}
            ])
            res.status(200).json({recipesLastAdded: recipes[0].lastAdded, recipesName: recipes[0].byName, collection: collection[0]})
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