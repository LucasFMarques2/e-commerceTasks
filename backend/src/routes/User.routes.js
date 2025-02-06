const { Router } = require("express");
const UserController = require('../controllers/UserController')

const userRouter = Router()

const userController = new UserController();


userRouter.post('/', userController.create);

module.exports = userRouter
