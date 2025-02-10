const User = require('../database/models/User')
const bcrypt = require('bcryptjs')

class UserController {
    async create(req, res){
      try{
        const { nome, email, password} = req.body;

        const userExists = await User.findOne({ email })
        if (userExists){
            return res.status(400).json({ message: "Esse e-email já é cadastrado"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)


        const newUser = await User.create({
        nome,
        email,
        password: hashedPassword,
        })
    
      res.status(201).json({
        message: 'Usuário criado com sucesso',
        user: {
          id: newUser._id,
          nome: newUser.nome,
          email: newUser.email,
        },
      })
      } catch (error){
        res.status(500).json({message: "Erro ao criar usuário", error})
      }
    }

    async updateWishlist(req, res) {
      try {
          const userId = req.user.id;
          const { items } = req.body;

          const user = await User.findById(userId);
          if (!user) throw new AppError('Usuário não encontrado', 404);

          user.wishlist = items.map(item => ({
              product: item.productId,
              quantity: item.quantity
          }));

          await user.save();
          res.status(200).json({ wishlist: user.wishlist });
      } catch (error) {
          res.status(500).json({ message: "Erro ao atualizar carrinho", error });
      }
  }

  async getWishlist(req, res) {
      try {
          const userId = req.user.id;
          const user = await User.findById(userId).populate('wishlist.product');
          if (!user) throw new AppError('Usuário não encontrado', 404);

          res.status(200).json({ wishlist: user.wishlist });
      } catch (error) {
          res.status(500).json({ message: "Erro ao buscar carrinho", error });
      }
  }

  async checkout(req, res) {
      try {
          const userId = req.user.id;
          const user = await User.findById(userId).populate('wishlist.product');
          if (!user) throw new AppError('Usuário não encontrado', 404);

          if (user.wishlist.length === 0) {
              throw new AppError('Carrinho vazio', 400);
          }

          user.purchased.push(...user.wishlist.map(item => ({
              product: item.product._id,
              quantity: item.quantity,
              purchaseDate: Date.now()
          })));

          user.wishlist = [];
          await user.save();

          res.status(200).json({ purchased: user.purchased });
      } catch (error) {
          res.status(500).json({ message: "Erro ao finalizar compra", error });
      }
  }
}

module.exports = UserController;