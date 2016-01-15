var Car = require('../models/car.js')

function index (req, res) {
	Car.find({}, function (err, cars) {
		if (err) console.log(err)
		res.render('layout', {cars: cars})
	})
}

function create (req, res, next) {
	var car = new Car ()
	car.make = req.body.make
	car.model = req.body.model
	car.color = req.body.color
	car.year = req.body.year

	car.save(function (err, car, count) {
		if(err) console.log(err)
		res.redirect('/cars')
	})
}

function show (req, res) {
	
}

function update (req, res) {
							
}

function destroy (req, res) {
	// body...
}

module.exports = {
	index: index,
	create: create,
	show: show, 
	update: update, 
	destroy: destroy
}