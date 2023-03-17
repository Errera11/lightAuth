const User = require('../models/userModel');
const Role = require('../models/roleModel');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwtGenerate = require('../jwt/jwtGenerate');

class UserController {

    async getUsers(req, res) {
        try {
            const users = await User.find();
            return res.status(200).send(users);
        } catch(e) {
            return res.status(400).send(`Get users error ${e}`)
        }
    }

    async signUp(req, res) {
        try {
            const {name, password} = req.body;
            const error = validationResult(req);
            if(!error.isEmpty()) return res.status(400).send(`Registration error: ${error.errors[0].msg}`);
            const isUserExists = await User.findOne({name});
            if (isUserExists) return res.status(400).send("This username already in use.");
            const role = new Role({value: "Admin"});
            const hashedPassword = await bcrypt.hash(password, 7);
            const user = new User({name, password: hashedPassword, role: [...role.value]});
            await user.save();
            return res.send("User successfully created")
        } catch(e) {
            return res.status(400).send(`Sign up error ${e}`)
        }
    }

    async signIn(req, res) {
        try {
            const {name, password} = req.body;
            const user = await User.findOne({name});
            if(!user) return res.status(400).send("User does not exist")
            const result = await bcrypt.compareSync(password, user.password);
            if(!result) return res.status(400).send("Wrong name or password");
            const token = jwtGenerate(user._id, user.role);
            return res.status(200).json({token});
        } catch(e) {
            return res.status(400).send(`Sign in error ${e}`);
        }
    }
}

module.exports = new UserController;