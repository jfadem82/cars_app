var express = require('express'), 
	carRouter = express.Router()

carRouter.get('/', function(){
	console.log('Getting Index')
})

module.exports = carRouter