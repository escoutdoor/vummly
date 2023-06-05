const mongoose = require('mongoose');
const users = mongoose.createConnection('mongodb+srv://PopovIvan:esc@vummly.zagaor4.mongodb.net/users')

const userSchema = users.model('User', new mongoose.Schema({
    mail: {
        type: String, 
        unique: true, 
        required: true
    },
    
}))

module.exports = userSchema