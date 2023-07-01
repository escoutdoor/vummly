const router = require('express').Router()
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


// get users / user

router.get('/getUser/:token', async(req, res) => {
    try {
        const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET)

        if(!decoded) {
            localStorage.removeItem('_auth')    
        } else {
            const user = await User.findOne({_id: decoded.id})
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const users = await User.find({}) 
        res.status(200).json(users)
    } catch (error) {   
        res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json("not found")
    }
})


// change username


router.put('/username/:userId/:mail', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.userId, mail: req.params.mail}, {$set: {name: req.body.name}}, {new: true})  
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/description/:userId/:mail', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.userId, mail: req.params.mail}, {$set: {description: req.body.description}}, {new: true})  
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/city/:userId/:mail', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.userId, mail: req.params.mail}, {$set: {city: req.body.city}}, {new: true})  
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/country/:userId/:mail', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.userId, mail: req.params.mail}, {$set: {country: req.body.country}}, {new: true})  
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router