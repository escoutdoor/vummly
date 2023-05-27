const mongoose = require('mongoose');
const support = mongoose.createConnection('mongodb+srv://PopovIvan:esc@vummly.zagaor4.mongodb.net/support')

const sectionSchema = support.model('Section', new mongoose.Schema({
    own: {
        type: String,
        unique: true,
        required: true
    },
    list: [{
        name: {type: String},
        link: {type: String},
    }]

}))

module.exports = sectionSchema