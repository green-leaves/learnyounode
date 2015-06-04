var fs = require('fs');
var path = require('path') 
module.exports = function(url, extension, callback) {
	var fileList = new Array();
	fs.readdir(url, function(err, list) {
		if (err) {
			return callback(err);
		}
		
		var filterList = [];
		for (var i = 0; i < list.length; i++) {
			if (path.extname(list[i]) == "." + extension) {
				fileList.push(list[i]);
			}
		}	
		return callback(null, fileList);
	});
}