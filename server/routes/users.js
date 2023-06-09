const router = require('express').Router()
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

router.post('/createOne', async (req, res) => {
    try {   
        const etc = {
            avatar: req.body?.avatar,
            collections: req.body?.collections,
            city: req.body?.city
        }
        const hashedPass = bcrypt.hashSync(req.body.password, 10)
        const user = new User({
            name: req.body.name,
            mail: req.body.mail,
            password: hashedPass,
            ...etc
        })

        const saved = await user.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try {   
        const { mail, password } = req.body
        const user = await User.findOne({mail: mail})

        if(!user) {
            res.status(404).json("user not found")
        }

        const pass = await bcrypt.compare(password, user.password)

        if(pass) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '24h'})
            res.status(200).json({token})
        } else {
            res.status(404).json("Something went wrong")
        }

    } catch (err) {
        res.status(500).json(err)
    }
})

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