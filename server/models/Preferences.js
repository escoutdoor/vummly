const mongoose = require('mongoose');
const book = mongoose.createConnection(process.env.DATABASE_BOOK_CONNECTION)

const preferencesSchema = book.model('Preferences', new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true
    },
    allergies: {
        type: [{
            type: String
        }],
        default: [],
    },
    diets: [
        {
            title: {
                type: String
            },
            description: {
                type: String
            }
        }
    ],
    dislikedIngredients: {
        type: [{
            type: String
        }],
        default: [],
    },
    favoriteCuisines: {
        type: [{
            type: String
        }],
        default: [],
    },
    goals: {
        type: [{
            type: String
        }],
        default: [],
    },



}))

module.exports = preferencesSchema