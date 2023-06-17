const mongoose = require('mongoose');
const collections = mongoose.createConnection(process.env.DATABASE_USERS_CONNECTION)

const collectionSchema = collections.model('Collection', new mongoose.Schema({
    userId: {
        type: String,
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
    recipes: [{type: mongoose.Types.ObjectId}]
},
{timestamps: true}))

module.exports = collectionSchema