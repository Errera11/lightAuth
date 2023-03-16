const userController = require("../controllers/userController");
const { check } = require('express-validator');

const userRouter = require('express').Router();

userRouter.post('/sign_in',
    [check('name', 'Name is required').notEmpty(), check('password', 'Password length error').isLength({min: 8, max: 30})],
userController.signIn);
userRouter.post('/sign_up', userController.signUp);
userRouter.get('/users', userController.getUsers);


module.exports = userRouter;