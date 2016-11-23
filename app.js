/*  Main App that starts the server and groups everything together  */

// Require all neccesary packages
var express = require('express');
var welcomeController = require('./controllers/welcomeController');

// Start the express app
var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('./public'));

/*  Temporary Handle Req  */
app.get('/', function (req, res) {
    // Render the Welcome Page
    res.render('welcome');
});

app.get('/chatRoom', function (req, res) {
    // Render the Chat Page
    res.render('chat');
});

// Listen for the 3000 port
app.listen(3000);

// Let us know which port the server is running on
console.log('Server running on port 3000');
