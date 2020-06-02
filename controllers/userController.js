var User = require("../models/user.js");

// Чтение документов
exports.read = function(req, res){
     User.find({}, function(err, users){
        if(err) return console.log(err);
        res.send(users)
    });
 }

 // Отобразить пользователя
exports.show = function (req, res) {

 	User.find({"login":req.params.login}, function (err, result) {
 		if (err) {
 			console.log(err);
 			res.send(500, err);
 		} else if (result.length !== 0) {
 // мы нашли пользователя
 			res.sendFile("C:\\Users\\lenovo\\Desktop\\WEB\\web-course_work\\views\\main\\index.html");//
 			//document.location.href = "/views/main/index.html";
 			} else {
 // пользователя с таким именем не существует,
 // поэтому возвращаем ошибку 404
 			res.send(404);
 		}
 	});
};