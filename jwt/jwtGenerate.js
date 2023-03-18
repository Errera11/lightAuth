const jwt = require('jsonwebtoken');
const {secret} = require('../config.js');

module.exports = function(id, role) {
    return jwt.sign({id, role: role}, secret, {expiresIn: "1h"});
}