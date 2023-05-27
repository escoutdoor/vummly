const mongoose = require('mongoose');
const support = mongoose.createConnection('mongodb+srv://PopovIvan:esc@vummly.zagaor4.mongodb.net/support')

const articleSchema = support.model('Article', new mongoose.Schema({
    idPage: {type: String, unique: true, required: true},

    title: {type: String},

    way: [{
        wayname: {type: String},
        link: {type: String}
    }],

    data: [{
        text: [{
            textline: {type: String},
            fontweight: {type: Number},
            fontstyle: {type: String},
            image: [{
                img: {type: String}
            }],
            bigImage: [{
                img: {type: String}
            }],
            link: {type: String},
            mail: {type: String},
        }],
        points: [{
            point: {type: String},
            image: [{
                img: {type: String}
            }],
            bigImage: [{
                img: {type: String}
            }],
            bold: {type: String},
            link: {type: String},
            mail: {type: String},
        }]
    }],
},
{timestamps: true}))

module.exports = articleSchema