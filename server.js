var  express = require("express");
var  app = express();
var  port = process.env.PORT || 8080;
var compression = require('compression');
app.use(compression());

// allowed file types
app.get(['*.js','*.ico','*.png','*.jpg','*.css','*.map'], function (req, res) {
	res.sendFile(__dirname+"/dist/"+req.path);
});
// all other requests will be routed to index.html
app.get('*', function (req, res) {
	res.sendFile(__dirname+"/dist/index.min.html");
});
app.listen(port, function () {
});

