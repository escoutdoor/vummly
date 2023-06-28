
const User = require('../models/User')
const fileMiddleware = require('../middleware/file')
const router = require('express').Router()
const path = require('path');
const ObjectId = require('mongoose').Types.ObjectId


router.put('/avatar/:userId', fileMiddleware.single('avatar'), async (req, res) => {
    try {
        if(req.file) {
            const user = await User.findOneAndUpdate(
                {_id: new ObjectId(req.params.userId)},
                {$set: {
                    avatar: req.file.filename
                }},
                {new: true}
            )

            res.status(200).json(user)
        }


    } catch (error) {
        res.status(400).json(err)
    }
})




module.exports = router