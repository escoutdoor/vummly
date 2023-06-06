const mongoose = require('mongoose');
const users = mongoose.createConnection(process.env.DATABASE_USERS_CONNECTION)

const userSchema = users.model('User', new mongoose.Schema({
    mail: {
        type: String, 
        unique: true, 
        required: true
    },
    
}))

module.exports = userSchema