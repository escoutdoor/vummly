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
    recipes: [{type: String, unique: true}]
},
{timestamps: true}))

module.exports = collectionSchema