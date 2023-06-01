const router = require('express').Router()
const Recipe = require('../models/Recipe');

router.post('/add-recipe', async (req, res) => {
    const newRecipe = await new Recipe(req.body)
    try {
        const saved = await newRecipe.save()
        res.status(200).json(saved)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/getOne/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({id: req.params.id})
        res.status(200).json(recipe)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get(`/all`, async (req, res) => {
    try {
        const recipes = await Recipe.find({})
        res.status(200).json(recipes)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get(`/all/:withArray/:without`, async (req, res) => {
    try {
        const params = await req.params.withArray.replace("_", " ").split("-")
        const paramsWo = await req.params.without.replace("_", " ").split("-")
        const recipes = await Recipe.find({$and: [{"ingredients.us.ingredient": {$all: params}}, {"ingredients.us.ingredient": {$nin : paramsWo}}]})
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

router.get(`/with/:withArray`, async (req, res) => {
    try {
        const params = await req.params.withArray.replace("_", " ").split("-")
        const recipes = await Recipe.find({"ingredients.us.ingredient": {$all: params}})
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

router.get(`/without/:without`, async (req, res) => {
    try {
        const params = await req.params.without.replace("_", " ").split("-")
        const recipes = await Recipe.find({"ingredients.us.ingredient": {$nin: params}})
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

router.get(`/nutrition/:nutrition`, async (req, res) => {
    try {
        const recipes = await Recipe.find({"tags.tag" : req.params.nutrition})
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

router.get(`/allowedAndNutrition/:withArray/:nutrition`, async (req, res) => {
    try {
        const params = await req.params.withArray.replace("_", " ").split("-")
        const recipes = await Recipe.find({$and : [{"tags.tag" : req.params.nutrition}, {"ingredients.us.ingredient": {$all : params}}]})
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})


router.get(`/bannedAndNutrition/:without/:nutrition`, async (req, res) => {
    try {
        const params = await req.params.without.replace("_", " ").split("-")
        const recipes = await Recipe.find({$and : [{"tags.tag" : req.params.nutrition}, {"ingredients.us.ingredient": {$nin : params}}]})
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

router.get(`/all/:withArray/:without/:nutrition`, async (req, res) => {
    try {
        const params = await req.params.withArray.replace("_", " ").split("-")
        const paramsWo = await req.params.without.replace("_", " ").split("-")
        const recipes = await Recipe.find({$and: [{"ingredients.us.ingredient": {$all: params}}, {"ingredients.us.ingredient": {$nin : paramsWo}}, {"tags.tag" : req.params.nutrition}]})
        res.status(200).json(recipes)
    } catch (err) { 
        res.status(500).json(err)
    }
})

// related

router.get('/related/:array', async (req, res) => {
    try {
        const params = await req.params.array.replace("_", " ").split("-")
        const related = await Recipe.find({"tags.tag" : {$in : params}})
        res.status(200).json(related)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.get('/moreFrom/:resource', async (req, res) => {
    try {
        const more = await Recipe.find({"resource.link" : req.params.resource})
        res.status(200).json(more)
    } catch (err) {
        res.status(500).json(err)
    }
})


// page

router.get('/page/:page', async (req, res) => {
    try {
        const page = await Recipe.find({"resource.link" : req.params.page})
        res.status(200).json(page)
    } catch (err) { 
        res.status(500).json(err)
    }
})


module.exports = router