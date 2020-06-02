var express = require("express");
var userController = require("../controllers/userController.js");
var userRouter = express.Router();
var app = express();

//userRouter.get("/users", userController.read);
userRouter.get("/users", userController.getUsers);
userRouter.get("/user/:login/inf", userController.getInf);
//userRouter.get("/user/:login", userController.show);

module.exports = userRouter;