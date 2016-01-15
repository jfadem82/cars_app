var port = process.env.PORT || 3000,
	express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/car_app';
	carRouter = require('./config/routes/car_routes.js')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect(mongoUri)

app.use('/cars', carRouter)

app.listen(port)
console.log('The server is running on port ' + port)