const mongoose = require('mongoose');
const users = mongoose.createConnection(process.env.DATABASE_USERS_CONNECTION)

const userSchema = users.model('User', new mongoose.Schema({
    mail: {
        type: String, 
        unique: true, 
        required: true
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'no-avatar.webp'
    },
    description: {
        type: String,
    },
    city: {type: String},
    country: {type: String},
    yums: {type: Array, default: []},
    collections: [
        {
            name: {type: String, required: true},
            recipes: [{type: String}]
        },
    ]
}))

module.exports = userSchema