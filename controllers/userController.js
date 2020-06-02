var User = require("../models/user.js");

 exports.getUsers = function(req, res){
    User.find({}, function(err, users){
        if(err) return console.log(err);
        res.send(users)
    });
 }

 exports.getInf = function(req, res){
 	User.find({"login":req.params.login}, function(err, user){
        if(err) return console.log(err);
        res.send(user)
    });
 }