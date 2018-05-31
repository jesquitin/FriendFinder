//Dependencies
var path = require('path');


// Routes
// =============================================================

module.exports = function(app){

	
	// Basic routes 
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

};