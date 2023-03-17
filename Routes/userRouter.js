const userController = require("../controllers/userController");
const { check } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const roleCheck = require('../middlewares/roleCheck');

//explains permissions for exact role
const required_roles = ["Admin"]

const userRouter = require('express').Router();

userRouter.post('/sign_in',
    [check('name', 'Name is required').notEmpty(), check('password', 'Password length error').isLength({min: 8, max: 30})],
userController.signIn);
userRouter.post('/sign_up', userController.signUp);
userRouter.get('/users', authMiddleware, roleCheck(required_roles), userController.getUsers);


module.exports = userRouter;