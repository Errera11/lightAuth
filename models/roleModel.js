
const {model, Schema} = require('mongoose')

const roleSchema = new Schema({
    value: [{type: String, unique: true, default: "User"}]
});

module.exports = model('Role', roleSchema);