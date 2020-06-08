var Message = require("../models/message.js");
var User = require("../models/user.js");

exports.getMyMessages = function(req, res) {
 	User.find({"login":req.params.login}, function(err, users){
 		Message.find({"sender":users[0]._id}, function(err, messages){
        	if(err) return console.log(err);
        	res.send(messages)
    	});
 	});
 }