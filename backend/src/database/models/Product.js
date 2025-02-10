const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  imgURL: { type: String, required: true },
  desconto: { type: Number, default: 0 },
  preco: { type: String, required: true },
  categoria: { 
    type: String, 
    enum: ['roupa', 'calcado', 'acessorio'], 
    required: true 
  }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
