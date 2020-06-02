const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.get("/users", userController.read);
userRouter.get("/user/:login", userController.show);

module.exports = userRouter;