var User = require("../models/user.js");

// Чтение документов
exports.read = function(req, res){
     User.find({}, function(err, users){
        if(err) return console.log(err);
        res.send(users)
    });
 }