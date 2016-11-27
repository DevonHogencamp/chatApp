/*  Control the settings for the user  */

// Our requires
var bodyParser = require('body-parser');

// Set up body parser
var urlEncodedParser = bodyParser.urlencoded({extended: false});

// Export this for the app.js to call
module.exports = function (app) {
    app.get('/settings', function (req, res) {
        // Render the Settings Page
        res.render('settings');
    });
};
