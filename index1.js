var express 		  = require('express');
var app 			  = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;
var ipaddress 		  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port 			  = process.env.OPENSHIFT_NODEJS_PORT || 8080;
 
app.get('/', function(req, res, next) { res.send('Hello world!'); });
 
var server = app.listen(port, ipaddress, function() {
    // Do your stuff
});
 
var options = {
    debug: true
}
 
app.use('/api', ExpressPeerServer(server, options));
 
// OR 
 
var server = require('http').createServer(app);
 
app.use('/peerjs', ExpressPeerServer(server, options));
 
//server.listen(9000);