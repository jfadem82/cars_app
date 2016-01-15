var mongoose = require('mongoose')

var carSchema = new mongoose.Schema ({
	make: String, 
	model: String, 
	color: String,
	year: Number
})

var Car = mongoose.model('Car', carSchema);

module.exports = Car;