var mongoose = require("mongoose");
var UserSchema = mongoose.Schema({
	login: String,
	name: String,
	balance: String
});
var User = mongoose.model("User", UserSchema);
module.exports = User;