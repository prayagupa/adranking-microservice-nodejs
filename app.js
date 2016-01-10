var express = require("express");
var app = express();

app.use(express.static('public'));

// ------------ start listening
var server = app.listen(3000, function() {
	console.log("ship-it listening on port %d", server.address().port);
});

