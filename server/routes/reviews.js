const router = require('express').Router();
const Review = require('../models/Review')
const ObjectId = require('mongoose').Types.ObjectId;


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

// like a review


router.put(`/like/:userId`, async (req, res) => {
    try {
        const review = await Review.find(
            {_id : new ObjectId(req.body.reviewId)}
        )

        if(review) {
            if(!review.find(r => r.likes.includes(new ObjectId(req.params.userId)))) {
                const updatedReview = await Review.findOneAndUpdate(
                    {_id : new ObjectId(req.body.reviewId)},
                    {$push: {
                        likes: new ObjectId(req.params.userId)
                    }},
                    {new: true}
                )
                res.status(200).json(updatedReview)
            } else {
                const updatedReview = await Review.findOneAndUpdate(
                    {_id : new ObjectId(req.body.reviewId)},
                    {$pull: {
                        likes: new ObjectId(req.params.userId)
                    }},
                    {new: true}
                )
                res.status(200).json(updatedReview)
            }
        }


    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router