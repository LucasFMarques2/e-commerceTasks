const { Router } = require("express");
const UserController = require('../controllers/UserController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRouter = Router()

const userController = new UserController();


userRouter.post('/', userController.create);
userRouter.put('/wishlist', ensureAuthenticated(), userController.updateWishlist);
userRouter.get('/wishlist', ensureAuthenticated(), userController.getWishlist);
userRouter.post('/checkout', ensureAuthenticated(), userController.checkout);

module.exports = userRouter
