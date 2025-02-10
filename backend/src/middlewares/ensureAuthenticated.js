const authConfig = require('../configs/auth');
const User = require('../database/models/User');
const AppError = require("../utils/AppError");
const { verify } = require('jsonwebtoken'); 

function ensureAuthenticated(role) {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return next(new AppError("JWT não informado", 401));
    }

    const [, token] = authHeader.split(" "); 

    try {
      const decoded = verify(token, authConfig.jwt.secret);
      const user = await User.findById(decoded.sub);

      if (!user) {
        return next(new AppError("Usuário não encontrado", 401));
      }

      req.user = {
        id: user._id,
        isAdmin: user.isAdmin
      };

      if (role && role === "isAdmin" && !req.user.isAdmin) {
        return next(new AppError("Acesso restrito a administradores", 403));
      }

      return next();
            
    } catch (error) {
      return next(new AppError("JWT token inválido", 401));
    }
  }
}

module.exports = ensureAuthenticated;