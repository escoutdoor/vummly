const router = require('express').Router()
const User = require('../models/Recipe');

router.post('/createOne', async (req, res) => {
    const newUser = await new User(req.body)
    try {
        const saved = await newUser.save()
        res.status(200).json(saved)
    } catch (err) {
        res.status(500).json(err)
    }
})