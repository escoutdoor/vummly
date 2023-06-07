const router = require('express').Router()
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/createOne', async (req, res) => {
    try {   
        const hashedPass = bcrypt.hashSync(req.body.password, 10)

        const user = new User({
            name: req.body.name,
            mail: req.body.mail,
            password: hashedPass
        })

        await user.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', async (req, res) => {
    try {   
        const user = await User.findOne({mail: req.body.mail})
        const pass = await bcrypt.compare(req.body.password, user.password)
        // await user.save()
        res.status(200).json(user)
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