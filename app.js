/*  Main App that starts the server and groups everything together  */

// Require all neccesary packages
var express = require('express');
var bodyParser = require('body-parser');

// Set up body parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

// Start the express app
var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('./public'));

// Temp messages data


/*  Temporary Handle Req  */
app.get('/', function (req, res) {
    // Render the Welcome Page
    res.render('welcome');
});

app.get('/chatRoom', function (req, res) {
    // Render the Chat Page
    res.render('chat');
});

app.get('/settings', function (req, res) {
    // Render the Settings Page
    res.render('settings');
});

app.get('/settingsAdmin', function (req, res) {
    // Render the settingsAdmin Page
    res.render('settingsAdmin');
});

app.get('/chatAdmin', function (req, res) {
    // Render the settingsAdmin Page
    res.render('chatAdmin');
});

// When user signs in log the req and send them to the chat room
app.post('/signIn', urlencodedParser, function (req, res) {
    console.log(req.body);

    res.render('chat', {data: req.body, hello: "Hello"});
});

// When user signs up log the req and send them to the chat room
app.post('/signUp', urlencodedParser, function (req, res) {
    console.log(req.body);

    res.render('chat', {data: req.body});
});

// Listen for the 3000 port
app.listen(3000);

// Let us know which port the server is running on
console.log('Server running on port 3000');
