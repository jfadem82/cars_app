step 1 - npm init, npm install (dependencies) --save, set variables on top of app.js (which require dependencies), set up app.listen, app.use for logger and body-parser, touch .gitignore and add node_modules. git commit.

step 2 - Created config folder, routes folder, and car_routes.js.  Added app.use for routes in app.js & required routes file. In car_routes.js, wrote initial 'get' function for index, and wrote in express.Router(), and module.exports at the bottom. ref: http://expressjs.com/en/guide/routing.html

step 3 - deploy to heroku, ref: https://github.com/ga-students/WDI_LA_20/tree/master/work/07-week/12_heroku-node-deployment-lesson

step 4 - created 'models' folder, and model/file for car. required mongoose, created carSchema, & module.exports