const mongoose = require('mongoose');
const book = mongoose.createConnection(process.env.DATABASE_BOOK_CONNECTION)

const settingsSchema = book.model('Settings', new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        default: ''
    },
    cookingLevel: {
        type: String,
        default: ''
    },
    people: {
        adults: {
            type: Number,
            default: 0
        },
        kids: {
            type: Number,
            default: 0
        }
    }
}))

module.exports = settingsSchema