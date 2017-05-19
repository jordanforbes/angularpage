var connect = require('connect');
var serveStatic = require('serve-static')

connect().use(serveStatic(__dirname)).listen(8098, function(){
	console.log('Server is running on 8098	')
})