var yelp = require("../index").createClient({
  consumer_key: 'rlL6wuTbogdyKizHVdzgMQ',
  consumer_secret: 'kCvu_Fk1Cf1dEmaKnCRbbsaG96I',
  token: '8gPw6ox904i-nh-Z1XDENK39Y9BMF6Vx',
  token_secret: 'bTrGqKvqGY8LJ3HXaJ_7QpBwqsE',
  ssl: true
});




var url = require('url');



// yelp.search({term: "food", location: "Montreal"}, function(error, data) {
//   //console.log(error);
//   //console.log(data);
// });

// yelp.business("yelp-san-francisco", function(error, data) {
//   //console.log(error);
//   //console.log(data);
// });


var http = require('http');
http.createServer(function (req, res) {

var url_parts = url.parse(req.url, true);
var term = url_parts.query.term || 'food',
	location = url_parts.query.location || 'San Franciso'; 

    res.writeHead(200, {'Content-Type': 'text/json'});
    console.log(url_parts.query);
    //console.log(location);

    yelp.search({term: term, location: location}, function(error, data) {
  		res.end(JSON.stringify(data));
	});

    
}).listen(9000, '127.0.0.1');

