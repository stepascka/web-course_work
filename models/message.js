var mongoose = require("mongoose");
var MessageSchema = mongoose.Schema({
	sender : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	name: String,
 	content: String,
 	date: String,
 	type: String,
 	destination: String,
 	number: String
});
var Message = mongoose.model("Message", MessageSchema);
module.exports = Message;