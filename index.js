
const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./Routes/userRouter');

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use('/', userRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/auth');
        app.listen(PORT, () => console.log("Started with " + PORT));
    } catch (e) {
        throw new Error(e);
    }
}

start()
