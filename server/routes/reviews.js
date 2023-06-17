const router = require('express').Router();
const Review = require('../models/Review')


router.post('/postReview/:userId/:recipeId', async (req, res) => {
    try {
        const review = new Review({
            userId: req.params.userId,
            recipeId: req.params.recipeId,
            rating : req.body?.rating,
            text: req.body.text,
            likes: []
        })
        const saved = await review.save()
        res.status(200).json(saved)
    } catch (err) {
        res.status(400).json(err)
    }
})





router.get('/getReview', async (req, res) => {
    try {
        const review = {}
        res.status(200).json(review)
    } catch (err) {
        res.status(404).json(err)
    }
})


module.exports = router