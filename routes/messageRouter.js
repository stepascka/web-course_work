const express = require("express");
const messageController = require("../controllers/messageController.js");
const messageRouter = express.Router();

messageRouter.get("/:login/messages", messageController.getMyMessages);

module.exports = messageRouter;