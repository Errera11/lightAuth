
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000;

const start = async () => {
    try {
        app.listen(PORT, () => console.log("Started with " + PORT));
        await mongoose.connect('mongodb://localhost:27017/');
    } catch (e) {
        throw new Error(e);
    }
}

start()
