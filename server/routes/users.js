const router = require('express').Router()
const User = require('../models/User');

router.post('/createOne', async (req, res) => {
    const newUser = await new User(req.body)
    try {
        // const saved = await newUser.save()
        const saved = await newUser.save()
        res.status(200).json(saved)
    } catch (err) {
        res.status(500).json(err)
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

module.exports = router