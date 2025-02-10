const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const productRouter = Router();

productRouter.post('/', ensureAuthenticated("isAdmin"), ProductController.create);
productRouter.get('/', ProductController.index); 
productRouter.get('/:id', ProductController.show); 
productRouter.delete('/:id', ensureAuthenticated("isAdmin"),ProductController.delete);

module.exports = productRouter;
