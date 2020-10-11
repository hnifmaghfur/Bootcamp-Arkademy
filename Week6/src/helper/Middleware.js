const jwt = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    console.log(`ini token di middleware ${token}`);
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
          return res.status(404).json({
            success: false,
            message: "Token is not invalid",
          });
        } else {
          req.decode = decode;
          next();
        }
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Auth Token is not supplied",
      });
    }
  },
};
