/*  Controls the chat of our app  */

// Our requires
var bodyParser = require('body-parser');

// Set up body parser
var urlEncodedParser = bodyParser.urlencoded({extended: false});

// Export this for the app.js to call
module.exports = function (app) {
    // Temo channel names to be ouputed
    var channels = ["General", "Code", "Memes", "Dank Memes"];

    app.post('/chat', urlEncodedParser, function (req, res) {
        // Render the Chat Page
        res.render('chat', {data: req.body, channels: channels});
    });
};
