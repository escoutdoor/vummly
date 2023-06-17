const router = require('express').Router()
const Recipe = require('../models/Recipe');
const Review = require('../models/Review');
const User = require('../models/User')

router.post('/add-recipe', async (req, res) => {
    const newRecipe = await new Recipe(req.body)
    try {
        const saved = await newRecipe.save()
        res.status(200).json(saved)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get all recipe info

router.get('/one/:recipeId', async (req, res) => {

    try {

        const recipe = await Recipe.findOne({id: req.params.recipeId})
        const revs = await Review.find({ recipeId: recipe._id });

        const userIds = revs.map(review => review.userId);
        const users = await User.find({ _id: { $in: userIds } });
        const reviews =  revs.map(review => {
            const user = users.find(user => user._id.equals(review.userId));
                return { ...review.toObject(), user: {
                    name: user.name,
                    _id: user._id,
                    avatar: user?.avatar,
                }};
        });
        
        const relatedRecipes = await Recipe.aggregate([
            {$match: {tags: { $in: [...recipe.tags]}, _id: {$ne: recipe._id}}},
            {$sample: {size: 4}},
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
        ]);
        const moreFromResource = await Recipe.aggregate([
            {$match: {"resource.link": recipe.resource.link, "resource.name": recipe.resource.name, _id: {$ne: recipe._id}}},
            {$sample: {size: 4}},
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
        const rating = reviews.flatMap(r => r.rating).reduce((a, c) => a + c, 0) / reviews.length
        res.status(200).json({
            recipe : {
                ...recipe.toObject(),
                reviews: reviews,
                rating: rating
            }, 
            related: relatedRecipes, 
            more: moreFromResource
        })
    } catch (err) {
        res.status(400).json(err)
    }
})


// chat





// 

router.get('/getOne/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({id: req.params.id})
        res.status(200).json(recipe)
    } catch (err) {
        res.status(500).json(err)
    }
})

// 


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
                    reviews: 0
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
                    reviews: 0
                }
            }
        ])
        res.status(200).json(page)
    } catch (err) { 
        res.status(500).json(err)
    }
})



module.exports = router