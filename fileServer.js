var http =  require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var readStream = fs.createReadStream(process.argv[3]);
	readStream.on('open', function() {
		readStream.pipe(res);
	});
 
}).listen(process.argv[2], '127.0.0.1');
console.log('Server running at ' + process.argv[2]);