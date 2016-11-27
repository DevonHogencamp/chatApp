/*  Main App that starts the server and groups everything together  */

// Require all neccesary packages
var express = require('express');

var chatController = require('./controllers/chatController');
var settingsController = require('./controllers/settingsController');
var chatAdminController = require('./controllers/chatAdminController');
var settingsAdminController = require('./controllers/settingsAdminController');

// Start the express app
var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('./public'));


// When user req the home page
app.get('/', function (req, res) {
    // Render the Welcome Page
    res.render('welcome');
});

chatController(app);

settingsController(app);

chatAdminController(app);

settingsAdminController(app);

// Listen for the 3000 port
app.listen(3000);

// Let us know which port the server is running on
console.log('Server running on port 3000');
