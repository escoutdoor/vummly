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
        let preferences = await Preferences.findOne({
            userId: new ObjectId(req.params.userId)
        })

        if(!preferences) {
            const newOne = new Preferences({
                userId: req.params.userId
            })
            preferences = await newOne.save()
        }

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

        res.status(200).json({diets: preferences.diets, allergies: preferences.allergies, disliked: preferences.dislikedIngredients, goals: preferences.goals, ingredients: ingredients.ingredients})
    } catch (error) {
        res.status(404).json(error)
    }
})


// diets

router.put('/deleteDiet/:userId/:dietId', async (req, res) => {
    try {
        const diets = await Preferences.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$pull: {diets: {_id: new ObjectId(req.params.dietId)}}},
            {new: true}
        )
        res.status(200).json(diets)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.put('/addDiet/:userId', async (req, res) => {
    try {
        const diets = await Preferences.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$push: {diets: {title: req.body.title, description: req.body.description}}},
            {new: true}
        )
        res.status(200).json(diets)
    } catch (err) {
        res.status(400).json(err)
    }
})

// allergies

router.put('/deleteAllergy/:userId', async (req, res) => {
    try {
        const allergies = await Preferences.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$pull: {allergies: req.body.title}},
            {new: true}
        )
        res.status(200).json(allergies)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.put('/addAllergy/:userId', async (req, res) => {
    try {
        const allergies = await Preferences.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$push: {allergies: req.body.title}},
            {new: true}
        )
        res.status(200).json(allergies)
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
        const disliked = await Preferences.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$push: {dislikedIngredients: req.body.title}},
            {new: true}
        )
        res.status(200).json(disliked)
    } catch (err) {
        res.status(400).json(err)
    }
})


// goals

router.put('/deleteGoal/:userId', async (req, res) => {
    try {
        const goals = await Preferences.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$pull: {goals : req.body.title}},
            {new: true}
        )
        res.status(200).json(goals)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.put('/addGoal/:userId', async (req, res) => {
    try {
        const goals = await Preferences.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$push: {goals: req.body.title}},
            {new: true}
        )
        res.status(200).json(goals)
    } catch (err) {
        res.status(400).json(err)
    }
})




module.exports = router