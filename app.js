var port = process.env.PORT || 3000,
	express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	logger = require('morgan'),
	bodyParser = require('body-parser')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(port)
console.log('The server is running on port ' + port)