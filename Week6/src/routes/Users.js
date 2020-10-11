const userRoute = require("express").Router();

const middleware = require("../helper/Middleware");

const userController = require("../controllers/Users");

userRoute.get("/", userController.getAllUsers);
userRoute.post("/", middleware.checkToken, userController.postUser);
userRoute.patch("/:id", middleware.checkToken, userController.patchUser);
userRoute.delete("/:id", middleware.checkToken, userController.deleteUser);

module.exports = userRoute;
