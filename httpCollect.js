var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(res) {
	//console.log("Got response: " + res.statusCode);
	res.pipe(bl(function (err, data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});