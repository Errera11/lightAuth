module.exports = function(roles) {
    return function(req, res, next) {
        try {
            console.log(req.user)
            req.user.forEach(user => {
                if(roles.includes(user.role)) return true;
            })
            res.status(400).send("Permission denied.")
            return false;
            next();
        } catch(e) {
            res.send("roleCheck error " + e);
        }

    }
}