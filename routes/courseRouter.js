const express = require("express");
const courseController = require("../controllers/courseController.js");
const courseRouter = express.Router();

courseRouter.get("/courses", courseController.read);

module.exports = courseRouter;