const jwt = require('jsonwebtoken');
const {secret} = require('../config');

module.exports = function(token) {
    return jwt.verify(token, secret);
}