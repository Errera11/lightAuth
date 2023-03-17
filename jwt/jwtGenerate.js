const jwt = require('jsonwebtoken');
const {secret} = require('../config.js');

module.exports = function(id, role) {
    return jwt.sign({role}, secret, {expiresIn: "1h"});
}