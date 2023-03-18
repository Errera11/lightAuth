module.exports = function(roles) {
    return function(req, res, next) {
        try {
            let hasRole = false;
            req.user.role.forEach(role => {
                if(roles.includes(role)) {
                    hasRole = true;
                }

            })
            if(hasRole) {
                next();
                return true;
            }
            res.status(400).send("Permission denied.")
            return false;
        } catch(e) {
            res.send("roleCheck error " + e);
        }

    }
}