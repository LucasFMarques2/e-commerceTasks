const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    wishlist: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
        quantity: { type: Number, default: 0 }
    }],
    purchased: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
        quantity: { type: Number, required: true },
        purchaseDate: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;