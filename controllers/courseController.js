var Course = require("../models/course.js");

exports.index = function (request, response){
    response.send("Объявление курса");
}

// Чтение документов
exports.read = function(req, res){
     Course.find({}, function(err, courses){
        if(err) return console.log(err);
        res.send(courses)
    });
 }