var mymodule = require('./mymodule.js');

var url = process.argv[2];
var extension = process.argv[3];

mymodule(url, extension, callback);

function callback(err, fileList) {
	if (!err) {
		for (var i = 0; i < fileList.length; i++) {
			console.log(fileList[i]);
		}
	}
}