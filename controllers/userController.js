var User = require("../models/user.js");

exports.registration = function(req, res){
    var newUser = new User({"login":req.body.login, "name":req.body.name});
	newUser.save(function (err, result) {
 		if(err) return console.log(err);
        res.send(true);
 	});
 }

 exports.getUsers = function(req, res){
    User.find({}, function(err, users){
        if(err) return console.log(err);
        res.send(users);
    });
 }

 exports.getInf = function(req, res){
 	User.find({"login":req.params.login}, function(err, users){
        if(err) return console.log(err);
        res.send(users);
    });
 }
