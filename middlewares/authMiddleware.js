
const jwtVerify = require('../jwt/jwtVerify');


module.exports = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isValid = jwtVerify(token);
        if(!isValid) return res.status(400).send("Invalid access token");
        //isValid is an object which consists of decoded user data
        req.user = isValid;
        next();
    } catch(e) {
        return res.status(400).send(`Auth error ${e}`)
    }
}