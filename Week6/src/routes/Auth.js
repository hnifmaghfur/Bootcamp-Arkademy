const authRoute = require("express").Router();

const authController = require("../controllers/Auth");

authRoute.post("/register", authController.register);
authRoute.get("/login", authController.login);

module.exports = authRoute;
