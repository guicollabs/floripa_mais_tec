require("dotenv").config();
const jwt = require("jsonwebtoken");

function validateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token || token === "Bearer") {
    return res.status(403).json({ message: "Token não encontrado." });
  }

  // const tokenJwt = token.slice(7);

  jwt.verify(token, process.env.Token, function (error, data) {
    if (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ error: "Token expirado" });
      } else if (error.name === "JsonWebTokenError") {
        return res.status(401).json({ error: "Token Inválido" });
      } else {
        return res.status(500).json({ error: "Erro interno do servidor" });
      }
    } else {
      req.body.userID = data.id;
      return next();
    }
  });
}

module.exports = validateToken;
