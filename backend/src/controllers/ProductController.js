const Product = require('../database/models/Product');
const AppError = require('../utils/AppError');

class ProductController {
    async create(req, res, next) {
        try {
            const { titulo, descricao, imgURL, desconto, preco, categoria } = req.body;
            
            const product = new Product({ titulo, descricao, imgURL, desconto, preco, categoria });
            await product.save();
            
            return res.status(201).json(product);
        } catch (error) {
            next(error);
        }
    }

    async index(req, res, next) {
        try {
            const products = await Product.find();
            return res.json(products);
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            
            if (!product) {
                throw new AppError('Produto não encontrado', 404);
            }

            return res.json(product);
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndDelete(id);
            
            if (!product) {
                throw new AppError('Produto não encontrado', 404);
            }

            return res.status(204).send(); 
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ProductController();
