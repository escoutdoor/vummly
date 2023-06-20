const router = require('express').Router()
const Recipe = require('../models/Recipe');
const Review = require('../models/Review');
const User = require('../models/User')
const ObjectId = require('mongoose').Types.ObjectId


// get all recipe info


router.get('/one/:recipeId', async (req, res) => {
    try {
        
        const recipe = await Recipe.aggregate([
            {$match: {id: req.params.recipeId}},
            {$facet: {
                relatedRecipes: [
                    {$lookup: {
                        from: 'recipes',
                        localField: "tags",
                        foreignField: "tags",
                        as: 'recipes'
                    }},
                    {$unwind: {path: "$recipes"}},
                    {$match: {"recipes.id": {$ne: req.params.recipeId}}},
                    {$replaceRoot: {newRoot: "$recipes"}},
                    {$sample: {size: 4}}
                ],
                moreFromResource: [
                    {$lookup: {
                        from: "recipes",
                        localField: "resource.link",
                        foreignField: "resource.link",
                        as: "recipes"
                    }},
                    {$unwind: {path: "$recipes"}},
                    {$match: {"recipes.id" : {$ne: req.params.recipeId}}},
                    {$replaceRoot: {newRoot: "$recipes"}},
                    {$sample: {size: 4}}
                ],
                recipe: [
                    {$lookup: {
                        from : "reviews",
                        localField: "_id",
                        foreignField: "recipeId",
                        as: "reviews"
                    }},
                    {$addFields: {
                        "rating": {$avg: "$reviews.rating"},
                    }},
                    {$sort: {"reviews.createdAt": -1, "reviews._id": 1}},
                ]
            }}
        ])

        res.status(200).json({recipe: recipe[0].recipe[0], related: recipe[0].relatedRecipes, more: recipe[0].moreFromResource})
    } catch (err) {
        res.status(404).json(err)
    }
})






router.get(`/all`, async (req, res) => {
    try {
        const recipes = await Recipe.aggregate([
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
            {
                $project: {
                    reviews: 0,
                }
            }
        ])
        res.status(200).json(recipes)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get(`/all/:withArray/:without`, async (req, res) => {
    try {
        const params = await req.params.withArray.replace("_", " ").split("-")
        const paramsWo = await req.params.without.replace("_", " ").split("-")
        const recipes = await Recipe.aggregate([
            {$match: {$and: [{"ingredients.us.ingredient": {$all: params}}, {"ingredients.us.ingredient": {$nin : paramsWo}}]}},
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
            {
                $project: {
                    reviews: 0
                }
            }
        ])
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

router.get(`/with/:withArray`, async (req, res) => {
    try {
        const params = await req.params.withArray.replace("_", " ").split("-")
        const recipes = await Recipe.aggregate([
            {$match: {"ingredients.us.ingredient": {$all: params}}},
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
            {
                $project: {
                    reviews: 0
                }
            }
        ])
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

router.get(`/without/:without`, async (req, res) => {
    try {
        const params = await req.params.without.replace("_", " ").split("-")
        const recipes = await Recipe.aggregate([
            {$match: {"ingredients.us.ingredient": {$nin: params}}},
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
            {
                $project: {
                    reviews: 0
                }
            }
        ])
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

router.get(`/nutrition/:nutrition`, async (req, res) => {
    try {
        const recipes = await Recipe.aggregate([
            {$match: {"tags" : {$in : [req.params.nutrition]}}},
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
            {
                $project: {
                    reviews: 0
                }
            }
        ])
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

router.get(`/allowedAndNutrition/:withArray/:nutrition`, async (req, res) => {
    try {
        const params = await req.params.withArray.replace("_", " ").split("-")
        const recipes = await Recipe.aggregate([
            {$match: {$and : [{"tags" : {$in : [req.params.nutrition]}}, {"ingredients.us.ingredient": {$all : params}}]}},
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
            {
                $project: {
                    reviews: 0
                }
            }
        ])
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})


router.get(`/bannedAndNutrition/:without/:nutrition`, async (req, res) => {
    try {
        const params = await req.params.without.replace("_", " ").split("-")
        const recipes = await Recipe.aggregate([
            {$match: {$and : [{"tags" : {$in : [req.params.nutrition]}}, {"ingredients.us.ingredient": {$nin : params}}]}},
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
            {
                $project: {
                    reviews: 0
                }
            }
        ])
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

router.get(`/all/:withArray/:without/:nutrition`, async (req, res) => {
    try {
        const params = await req.params.withArray.replace("_", " ").split("-")
        const paramsWo = await req.params.without.replace("_", " ").split("-")
        const recipes = await Recipe.aggregate([
            {$match: {$and: [{"ingredients.us.ingredient": {$all: params}}, {"ingredients.us.ingredient": {$nin : paramsWo}}, {"tags" : {$in : [req.params.nutrition]}}]}},
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
            {
                $project: {
                    reviews: 0
                }
            }
        ])
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})



// page

router.get('/page/:page', async (req, res) => {
    try {
        const page = await Recipe.aggregate([
            {$match: {"resource.link" : req.params.page}},
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
            {
                $project: {
                    reviews: 0,
                    time: 0,
                    nutrition: 0,
                    servings: 0,
                }
            }
        ])
        res.status(200).json(page)
    } catch (err) { 
        res.status(500).json(err)
    }
})



module.exports = router