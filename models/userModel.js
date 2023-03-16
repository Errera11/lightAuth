
const {model, Schema} = require('mongoose');

const User = new Schema({
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: [{type: String, ref: "Role"}]
})

module.exports = model("User", User);