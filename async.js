var http = require('http');
var bl = require('bl');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1, function(res) {
	//console.log("Got response: " + res.statusCode);
	res.pipe(bl(function (err, data) {
		//console.log(data.toString().length);
		console.log(data.toString());
		http.get(url2, function(res) {
			//console.log("Got response: " + res.statusCode);
			res.pipe(bl(function (err, data) {
				//console.log(data.toString().length);
				console.log(data.toString());
				http.get(url3, function(res) {
					//console.log("Got response: " + res.statusCode);
					res.pipe(bl(function (err, data) {
						//console.log(data.toString().length);
						console.log(data.toString());
					}));
				});				
			}));
		});
	}));
});



