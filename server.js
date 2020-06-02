var express = require("express");
var mongoose = require("mongoose");
var courseRouter = require("./routes/courseRouter.js");
var userRouter = require("./routes/userRouter.js");
var app = express();

mongoose.connect("mongodb://localhost/CourseShop", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Cервер запущен..");
    });
});

app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));

app.use("/user", courseRouter);
app.use("/", userRouter);

//app.use("", function (request, response) {
 // response.redirect("/authorization.html");
//});