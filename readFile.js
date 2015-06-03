var fs = require('fs');
var buffer = fs.readFile(process.argv[2], 
	function(err, data) {
		if (!err) {
			var str = data.toString();
			var line = str.split("\n");
			console.log(line.length - 1);
		}
	}
);
