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
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    city: {
        type: String, 
        default: ''
    },
    country: {
        type: String, 
        default: ''
    },
}))

module.exports = userSchema