const express = require('express')
const dotenv = require('dotenv')
const app = express()

app.use(express.json({ extended: true }))

dotenv.config()

// routes --------------------------------------------

const articles = require('./routes/articles')
const sections = require('./routes/sections')
const categories = require('./routes/categories')
const collections = require('./routes/collections')
const recipes = require('./routes/recipes')
const users = require('./routes/users')
const auth = require('./routes/auth')
const reviews = require('./routes/reviews')
const preferences = require('./routes/preferences')
const settings = require('./routes/settings')
const upload = require('./routes/upload')
const planner = require('./routes/planner')
const shopping = require('./routes/shopping')

// connection --------------------------------------------

// support
app.use('/server/support/articles', articles)
app.use('/server/support/sections', sections)
app.use('/server/support/categories', categories)

// recipe
app.use('/server/recipe', recipes)

// users
app.use('/server/user', users)

// collections
app.use('/server/collections', collections)

// auth
app.use('/server/auth', auth)

// reviews
app.use('/server/reviews', reviews)

// preferences
app.use('/server/preferences', preferences)

// settings
app.use('/server/settings', settings)

// multer

app.use('/server/upload', upload)

// planner

app.use('/server/meal-planner', planner)

// shopping

app.use('/server/shopping', shopping)

// --------------------------------------------

app.listen(process.env.DATABASE_PORT, () => {
	console.log('Back-end server is working well')
})
