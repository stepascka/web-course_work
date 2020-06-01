var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var courseRouter = require("./routes/courseRouter.js");
var app = express();

mongoose.connect("mongodb://localhost/CourseShop", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Cервер прослушивает входящие соединения!");
    });
});

app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));

app.use("/", courseRouter);

