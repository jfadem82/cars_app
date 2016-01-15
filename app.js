var port = process.env.PORT || 3000,
	express = require('express'),
	path = require('path'),
	app = express(),
	mongoose = require('mongoose'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/car_app',
	carRouter = require('./config/routes/car_routes.js')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', require ('ejs').renderFile)
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

mongoose.connect(mongoUri)

app.use('/cars', carRouter)

app.listen(port)
console.log('The server is running on port ' + port)