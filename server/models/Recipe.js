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
            tag: {
                type: String,
            }
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
    },
    directions: {
        video: {
            poster: {
                type: String,
            },
            source : {
                type: String
            }
        },
        steps: [
            {
                step: {
                    type: String
                }
            }
        ]
    },
    reviews: [
        {
            user: {
                type: String
            },
            link: {
                type: String
            },
            stars: {
                type: Number
            },
            rev: {
                type: String
            },
            likes: {
                type: Array
            },
            time: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, 
{timestamps: true}))

module.exports = recipeSchema