const router = require('express').Router();
const ObjectId = require('mongoose').Types.ObjectId
const Settings = require('../models/Settings')
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.get('/:userId', async (req, res) => {
    try {
        let settings = await Settings.findOne({
            userId: new ObjectId(req.params.userId)
        })

        if(!settings) {
            const newOne = new Settings({
                userId: req.params.userId
            })
            settings = await newOne.save()
        }

        res.status(200).json(settings)
    } catch (error) {
        res.status(404).json(error)
    }
})

// gender


router.put('/gender/:userId', async (req, res) => {
    try {
        const settings = await Settings.findOne({userId: new ObjectId(req.params.userId)})

        const updated = await Settings.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$set: {gender: settings.gender === req.body.gender ? "" : req.body.gender}},
            {new: true}
        )

        res.status(200).json(updated)
    } catch (err) { 
        res.status(400).json(err)
    }
})


// cooking level

router.put('/level/:userId', async (req, res) => {
    try {
        const settings = await Settings.findOne({userId: new ObjectId(req.params.userId)})

        const updated = await Settings.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$set: {cookingLevel: settings.cookingLevel === req.body.level ? "" : req.body.level}},
            {new: true}
        )

        res.status(200).json(updated)
    } catch (err) { 
        res.status(400).json(err)
    }
})


// household

router.put('/household/:userId', async (req, res) => {
    try {
        const updated = await Settings.findOneAndUpdate(
            {userId: new ObjectId(req.params.userId)},
            {$set: {
                people: {
                    adults: req.body.adults,
                    kids: req.body.kids
                }
            }},
            {new: true}
        )

        res.status(200).json(updated)
    } catch (err) { 
        res.status(400).json(err)
    }
})


// mail 

router.put('/mail/:userId', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            {_id : new ObjectId(req.params.userId)},
            {$set: {mail: req.body.mail}},
            {new: true}
        )

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
})


// password 

router.put('/password/:userId', async (req, res) => {
    try {
        const user = await User.findOne({_id: new ObjectId(req.params.userId)})
        const pass = await bcrypt.compare(req.body.oldPassword, user.password)

        if(pass) {
            const newPass = bcrypt.hashSync(req.body.newPassword, 10);
            const user = await User.findOneAndUpdate(
                {_id: new ObjectId(req.params.userId)},
                {$set: {
                    password: newPass 
                }},
                {new: true}
            )
            res.status(200).json(user)
        } else {
            res.status(404).json("incorrect password")
        }

    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router