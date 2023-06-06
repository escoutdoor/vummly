const mongoose = require('mongoose');
const support = mongoose.createConnection(process.env.DATABASE_SUPPORT_CONNECTION)

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