var express = require('express'), 
	carRouter = express.Router(),
	carsController = require('../../controllers/cars_controller')

carRouter.route('/')
	.get(carsController.index)
	.post(carsController.create)



module.exports = carRouter