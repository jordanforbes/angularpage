var connect = require('connect');
var serveStatic = require('serve-static')

// connect().use(serveStatic(__dirname)).listen(5000, function(){
// 	console.log('Server is running on 5000	')
// })


connect().use(serveStatic(__dirname)).listen(process.env.PORT || 5000)

