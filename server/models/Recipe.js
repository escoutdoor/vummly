const mongoose = require('mongoose');
const book = mongoose.createConnection(process.env.DATABASE_BOOK_CONNECTION)

const recipeSchema = book.model('Recipe', new mongoose.Schema({
    id: {
        type: String, 
        unique: true,
        required: true,
        dropDups: true
    },
    title: {
        type: String, 
        unique: true,
        required: true
    },
    time: {
        type: Number
    },
    resource: {
        link: {type: String},
        name: {type: String}
    },
    nutrition: [
        {
            label: {
                type: String
            },
            value: {
                type: Number
            }
        }
    ],
    tags: [
        {
            type: String,
        }
    ],
    servings: {
        type: Number
    },
    ingredients: {
        us: [
            {
                quantity: {
                    type: Number
                },
                measurement: {
                    type: String
                },
                ingredient: {
                    type: String
                },
                technique: {
                    type: String
                }
            }
        ],
        metric: [
            {
                quantity: {
                    type: Number
                },
                measurement: {
                    type: String
                },
                ingredient: {
                    type: String
                },
                technique: {
                    type: String
                }
            }
        ]
    }
}, 
{timestamps: true}))

module.exports = recipeSchema

// directions: {
//     video: {
//         poster: {
//             type: String,
//         },
//         source : {
//             type: String
//         }
//     },
//     steps: [
//         {
//             step: {
//                 type: String
//             }
//         }
//     ]
// },
