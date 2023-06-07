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
        required: true
    },
    city: {type: String},
    country: {type: String},
    social: [{

    }],
    yums: {type: Array, default: []},
    collections: [
        {
            name: {type: String, required: true},
            recipes: [{type: String}]
        },
    ]
}))

module.exports = userSchema