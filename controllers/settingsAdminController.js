/*  Control the settings for the admin  */

// Our requires
var bodyParser = require('body-parser');

// Set up body parser
var urlEncodedParser = bodyParser.urlencoded({extended: false});

// Export this for the app.js to call
module.exports = function (app) {
    app.get('/settingsAdmin', function (req, res) {
        // Render the settingsAdmin Page
        res.render('settingsAdmin');
    });
};
