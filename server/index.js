const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express()
app.use(express.json())
dotenv.config()
// routes --------------------------------------------

// support
const articles = require('./routes/articles');
const sections = require('./routes/sections');
const categories = require('./routes/categories');
const collections = require('./routes/collections');

// recipe

const recipes = require('./routes/recipes')

// users 

const users = require('./routes/users')

// connection --------------------------------------------

const port = 8800
// mongoose.connect('mongodb+srv://PopovIvan:esc@vummly.zagaor4.mongodb.net/support').then(() => console.log('Connected to MongoDB'), (err) => console.log(err))

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

// --------------------------------------------

app.listen(port, () => {
    console.log('Back-end server is working well');
})
