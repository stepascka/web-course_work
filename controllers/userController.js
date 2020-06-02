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

 exports.addBalance = function (req, res) {
 	var oldBalance, newBalance;
 	User.find({"login":req.params.login}, function(err, users){
		    
		    if (users[0].balance != null)
		       	oldBalance = users[0].balance;
		    else 
		        oldBalance = "0";

		    newBalance = oldBalance - 0 + (req.body.balance - 0);

		    User.updateOne({login:req.params.login}, {$set:{balance:newBalance}}, function(err, user){
		        if(err) return console.log(err);
		        //res.send(user)
		    });

		    res.send(true)
    });   
    
};