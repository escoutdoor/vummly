const router = require('express').Router()
const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
const Review = require('../models/Review');
const User = require('../models/User')
const ObjectId = require('mongoose').Types.ObjectId

// get all recipe info


router.get('/one/:recipeId', async (req, res) => {
    try {
        
        const [recipe] = await Recipe.aggregate([
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
                    {$unwind: {path: "$reviews", preserveNullAndEmptyArrays: true}},
                    {$lookup: {
                        from: "users",
                        localField: "reviews.userId",
                        foreignField: "_id",
                        as: "users"
                    }},
                    {$addFields: {
                        "rating": {$avg: "$reviews.rating"},
                        "reviews.user":{$arrayElemAt: ["$users", 0]}
                    }},
                    {$group: {
                        _id: "$_id",
                        id: {"$first" : "$id"},
                        title: {"$first" :"$title"},
                        time: {"$first" :"$time"},
                        resource: {"$first" :"$resource"},
                        nutrition: {"$first" :"$nutrition"},
                        tags: {"$first": "$tags"},
                        servings: {"$first" : "$servings"},
                        ingredients: {"$first" :"$ingredients"},
                        reviews: { $push: "$reviews" },
                        rating: {"$first" : "$rating"},
                    }},
                    {$sort: {"reviews.createdAt": -1, "reviews._id": 1}},
                ]
            }},
            {
                $project: {
                    recipe: {$arrayElemAt : ['$recipe', 0]},
                    related: '$relatedRecipes',
                    more: '$moreFromResource'
                }
            }
        ])

        res.status(200).json({recipe: recipe.recipe, related: recipe.related, more: recipe.more})
    } catch (err) {
        res.status(404).json(err)
    }
})


// recipe search

router.get('/recipes', async (req, res) => {
    try {
        const { allowed, banned, nutrition, sort, time } = req.query
        const allowedArray = allowed ? allowed.replaceAll("_", " ").split("-") : []
        const bannedArray = banned ? banned.replaceAll("_", " ").split("-") : []

        const recipes = await Recipe.aggregate([
            {
                $match: {
                    $and: [
                        allowedArray.length > 0 ? {"ingredients.us.ingredient": {$all: allowedArray}} : {},
                        bannedArray.length > 0 ? {"ingredients.us.ingredient": {$nin: bannedArray}} : {},
                        nutrition.length > 0 ? {"tags" : {$in : [nutrition]}} : {},
                        Number(time) > 0 ? {"time" : {$lt : Number(time)}} : {}
                    ],
                }
            },
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'recipeId', 
                    as: 'reviews'
                }
            },
            {
                $lookup: {
                    from: 'collections',
                    localField: '_id',
                    foreignField: 'recipes.recipeId', 
                    as: 'collections'
                }
            },
            {
                $addFields: {
                    rating: {
                        $avg: '$reviews.rating'
                    },
                    collections: {
                        $size: '$collections.recipes.recipeId'
                    }
                }
            },
            {
                $project: {
                    reviews: 0,
                }
            },
            {$sort: 
                sort === 'relevance' ? {rating: -1} :
                sort === 'popular' ? {collections: -1} :
                sort === 'time' ? {time: 1} :
                {}
            },
        ])
        res.status(200).json(recipes)

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