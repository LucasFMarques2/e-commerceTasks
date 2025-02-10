const User = require('../database/models/User');
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

class SessionController {
    async create(req, res, next) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                throw new AppError("Email e senha são obrigatórios", 400);
            }

            const user = await User.findOne({ email });

            if (!user) {
                throw new AppError("Email e/ou senha incorreto", 401);
            }

            const passwordMatched = await compare(password, user.password);

            if (!passwordMatched) {
                throw new AppError("Email e/ou senha incorreto", 401);
            }

            const { secret, expiresIn } = authConfig.jwt;
            const token = sign({}, secret, {
                subject: String(user._id),
                expiresIn,
            });

            return res.json({ user, token });
        } catch (error) {
            next(error); 
        }
    }
}

module.exports = SessionController;
