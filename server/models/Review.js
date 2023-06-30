const mongoose = require('mongoose');
const book = mongoose.createConnection(process.env.DATABASE_BOOK_CONNECTION)

const reviewSchema = book.model('Review', new mongoose.Schema({
    userId: {
        required: true,
        type: mongoose.Schema.ObjectId
    },
    recipeId: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    rating: {
        type: Number,
        default: 0
    },
    text: {
        type: String,
        required: true,
        default: ''
    },
    likes: [{type: mongoose.Schema.ObjectId}]
},
{timestamps: true}))

module.exports = reviewSchema