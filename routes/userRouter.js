var express = require("express");
var userController = require("../controllers/userController.js");
var userRouter = express.Router();
var app = express();

userRouter.get("/users", userController.getUsers);
userRouter.get("/user/:login/inf", userController.getInf);
//userRouter.put("/user/:login/balance", userController.addBalance);
userRouter.post("/user/reg", userController.registration);

module.exports = userRouter;