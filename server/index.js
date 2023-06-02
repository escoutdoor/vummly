const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json())

// routes --------------------------------------------

// support
const articles = require('./routes/articles');
const sections = require('./routes/sections');
const categories = require('./routes/categories');

// recipe

const recipes = require('./routes/recipes')

// connection --------------------------------------------

const port = 8800
// mongoose.connect('mongodb+srv://PopovIvan:esc@vummly.zagaor4.mongodb.net/support').then(() => console.log('Connected to MongoDB'), (err) => console.log(err))

// support 
app.use('/server/support/articles', articles)
app.use('/server/support/sections', sections)
app.use('/server/support/categories', categories)

// recipe 
app.use('/server/recipe', recipes)

// --------------------------------------------

app.listen(port, () => {
    console.log('Back-end server is working well');
})