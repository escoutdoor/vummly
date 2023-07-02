const express = require("express");
const app = express();
const jwt = require('jsonwebtoken')
app.use(express.json());


const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "72h",
    });
};

const verify = (token) => {
    
}


module.exports = {
    generateToken,
    verify
}