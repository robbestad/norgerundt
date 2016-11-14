var  express = require("express");
var  app = express();
var  port = process.env.PORT || 8080;
var compression = require('compression');
const curl = require('curlrequest');
const bodyParser = require('body-parser');
app.use(compression());

const getData = (coords) => new Promise(resolve => {
	const lat = coords.lat || '60.10';
	const lon = coords.lat || '9.58';
	curl.request({ url: `http://api.met.no/weatherapi/locationforecast/1.9/?lat=${lat};lon=${lon};msl=70`, pretend: false}, function (err, stdout, meta) {
		resolve(stdout);
	});
})

// allowed file types
app.get(['*.js','*.ico','*.png','*.jpg','*.css','*.map'], function (req, res) {
	res.sendFile(__dirname+"/dist/"+req.path);
});
app.post('/search', bodyParser.json(), (req, res) => {
	res.set('Content-Type', 'text/plain');
	getData(req.body).then(res.send.bind(res));
});
// all other requests will be routed to index.html
app.get('*', function (req, res) {
	res.sendFile(__dirname+"/dist/index.min.html");
});
app.listen(port, function () {
});

