const router = require('express').Router()
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


// get users / user

router.get('/getUser/:token', async(req, res) => {
    try {
        const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET)

        if(!decoded) {
            res.status(404).json("Something went wrong...")
        } 
        const user = await User.findOne({_id: decoded.id})
        decoded && res.status(200).json(user)
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


module.exports = router