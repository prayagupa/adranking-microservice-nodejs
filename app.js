var express = require("express");
var app = express();

app.use(express.static('public'));

app.get('/v1/ads/select',(req,res)=>{
    console.log('route v1/ads/select')
    var response={ads: [1, 2, 3]};
    console.log(response);

	setTimeout((() => {
		res.send(response);
	  }), 5000)
});

// ------------ start listening
var server = app.listen(3000, function() {
	console.log("ad selection listening on port %d", server.address().port);
});
