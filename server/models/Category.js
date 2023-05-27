const mongoose = require('mongoose');
const support = mongoose.createConnection('mongodb+srv://PopovIvan:esc@vummly.zagaor4.mongodb.net/support')

const categorySchema = support.model('Category', new mongoose.Schema({
    idPage: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    parts: [{
        title: {type: String},
        links: [{
            title: {type: String},
            l: {type: String, unique: true}
        }]
    }],
}, 
{timestamps: true}))

module.exports = categorySchema