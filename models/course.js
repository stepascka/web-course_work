var mongoose = require("mongoose");
var CourseSchema = mongoose.Schema({
	name: String,
 	description: String
});
var Course = mongoose.model("Course", CourseSchema);
module.exports = Course;