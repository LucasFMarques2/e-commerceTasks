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
}

module.exports = UserController;