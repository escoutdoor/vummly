const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Collection = require('../models/Collection');
const { generateToken } = require('../middleware/verifyUser');


router.post('/createOne', async (req, res) => {
    try {   
        const hashedPass = bcrypt.hashSync(req.body.password, 10);
        const user = new User({
            _id: req.body._id,
            name: req.body.name,
            mail: req.body.mail,
            password: hashedPass,
        });

        if(user) {
            const token = generateToken(user)
        }

        const saved = await user.save()
        res.status(200).json({token})
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

            const token = generateToken(user)

            res.status(200).json({token})

        } else {
            res.status(404).json("Something went wrong")
        }

    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router
