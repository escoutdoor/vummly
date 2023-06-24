const router = require('express').Router();
const ObjectId = require('mongoose').Types.ObjectId
const Preferences = require('../models/Preferences')
const Recipe  = require('../models/Recipe')


router.post('/:userId', async (req, res) => {
    try {
        const preferences = new Preferences({
            userId: new ObjectId(req.params.userId),
            ...req.body
        })
        await preferences.save()
        res.status(200).json(preferences)
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/:userId', async (req, res) => {
    try {
        const preferences = await Preferences.findOne({
            userId: new ObjectId(req.params.userId)
        })

        const [ingredients] = await Recipe.aggregate([
            {$match: {}},
            {$replaceRoot: {newRoot: "$ingredients"}},
            {$unwind: {path: "$us"}},
            {$group: {
                _id: null,
                ingredients: {$addToSet: {$toLower : "$us.ingredient"}}
            }},
            {$project: {
                _id: 0,
                ingredients: 1
            }}
        ])

        res.status(200).json({diets: preferences.diets, allergies: preferences.allergies, disliked: preferences.dislikedIngredients, ingredients: ingredients.ingredients})
        // res.status(200).json()
    } catch (error) {
        res.status(404).json(error)
    }
})


// diets

router.put('/deleteDiet/:userId/:dietId', async (req, res) => {
    try {
        const deleted = await Preferences.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$pull: {diets: {_id: new ObjectId(req.params.dietId)}}},
            {new: true}
        )
        res.status(200).json(deleted)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.put('/addDiet/:userId', async (req, res) => {
    try {
        const exists = await Preferences.findOne({userId: new ObjectId(req.params.userId)})

        if(exists) {
            const diets = await Preferences.findOneAndUpdate(
                {userId: new ObjectId(req.params.userId)},
                {$push: {diets: {title: req.body.title, description: req.body.description}}},
                {new: true}
            )
            res.status(200).json(diets)
        } else {
            const preferences = new Preferences({
                userId: new ObjectId(req.params.userId),
                diets: [{title: req.body?.title, description: req.body?.description}]
            })
            const saved = await preferences.save()
            res.status(200).json(saved)
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

// allergies

router.put('/deleteAllergy/:userId', async (req, res) => {
    try {
        const deleted = await Preferences.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$pull: {allergies: req.body.title}},
            {new: true}
        )
        res.status(200).json(deleted)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.put('/addAllergy/:userId', async (req, res) => {
    try {
        const exists = await Preferences.findOne({userId: new ObjectId(req.params.userId)})

        if(exists) {
            const allergies = await Preferences.findOneAndUpdate(
                {userId: new ObjectId(req.params.userId)},
                {$push: {allergies: req.body.title}},
                {new: true}
            )
            res.status(200).json(allergies)
        } else {
            const preferences = new Preferences({
                userId: new ObjectId(req.params.userId),
                allergies: [req.body?.title]
            })
            const saved = await preferences.save()
            res.status(200).json(saved)
        }
    } catch (err) {
        res.status(400).json(err)
    }
})


// disliked ingredients

router.put('/deleteDisliked/:userId', async (req, res) => {
    try {
        const deleted = await Preferences.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$pull: {dislikedIngredients : req.body.title}},
            {new: true}
        )
        res.status(200).json(deleted)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.put('/addDisliked/:userId', async (req, res) => {
    try {
        const exists = await Preferences.findOne({userId: new ObjectId(req.params.userId)})

        if(exists) {
            const disliked = await Preferences.findOneAndUpdate(
                {userId: new ObjectId(req.params.userId)},
                {$push: {dislikedIngredients: req.body.title}},
                {new: true}
            )
            res.status(200).json(disliked)
        } else {
            const preferences = new Preferences({
                userId: new ObjectId(req.params.userId),
                dislikedIngredients: [req.body?.title]
            })
            const saved = await preferences.save()
            res.status(200).json(saved)
        }
    } catch (err) {
        res.status(400).json(err)
    }
})



module.exports = router