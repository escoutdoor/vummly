const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// get users / user

router.get('/getUser/:token', async (req, res) => {
	try {
		const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET)

		if (decoded) {
			const user = await User.findOne({ _id: decoded.id }, { password: 0 })
			res.status(200).json(user)
		} else {
			res.status(404).json('nothing')
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

router.get('/:userId', async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.userId }, { password: 0 })
		res.status(200).json(user)
	} catch (error) {
		res.status(404).json('not found')
	}
})

// update user

router.put('/:userId', async (req, res) => {
	try {
		const userId = req.params.userId
		const { user } = req.body

		const updated = await User.findOneAndUpdate({ _id: userId }, { ...user }, { password: 0 })
		res.status(200).json(updated)
	} catch (error) {
		res.status(500).json('something went wrong')
	}
})

module.exports = router
