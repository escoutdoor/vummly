const mongoose = require('mongoose');
const collections = mongoose.createConnection(process.env.DATABASE_BOOK_CONNECTION)

const collectionSchema = collections.model('Collection', new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    recipes: [{recipeId: {type: mongoose.Types.ObjectId}, addedToCollection: {type: Date, default: Date.now}}]
},
{timestamps: true}))

module.exports = collectionSchema