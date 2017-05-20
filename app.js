var connect = require('connect');
var serveStatic = require('serve-static')

connect().use(serveStatic(__dirname)).listen(5000, function(){
	console.log('Server is running on 5000	')
})