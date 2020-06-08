var express = require("express");
var mongoose = require("mongoose");
var messageRouter = require("./routes/messageRouter.js");
var userRouter = require("./routes/userRouter.js");
var app = express();

mongoose.connect("mongodb://localhost/RegistrationOfLetters", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Cервер запущен..");
    });
});

app.use(express.static(__dirname + "/views/authorization"));
app.use("/user/:login", express.static(__dirname + "/views/main"));
//app.use("/user/:login/acqCourse", express.static(__dirname + "/views/acquiredCourses"));
app.use(express.urlencoded({ extended: true }));

app.use("/user", messageRouter);
app.use("/", userRouter);
