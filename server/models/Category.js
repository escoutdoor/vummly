const mongoose = require('mongoose');
const support = mongoose.createConnection(process.env.DATABASE_SUPPORT_CONNECTION)

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