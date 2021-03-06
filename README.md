[![NPM version](https://badge.fury.io/js/yelp.png)](http://badge.fury.io/js/yelp)

Node.js module for interfacing with [Yelp](http://www.yelp.com)'s API v2.0

# Install #

    npm install yelp

# Usage #

    // Request API access: http://www.yelp.com/developers/getting_started/api_access
    
    var yelp = require("yelp").createClient({
      consumer_key: "consumer-key", 
      consumer_secret: "consumer-secret",
      token: "token",
      token_secret: "token-secret"
    });

    // See http://www.yelp.com/developers/documentation/v2/search_api
    yelp.search({term: "food", location: "Montreal"}, function(error, data) {
      console.log(error);
      console.log(data);
    });

    // See http://www.yelp.com/developers/documentation/v2/business
    yelp.business("yelp-san-francisco", function(error, data) {
      console.log(error);
      console.log(data);
    });
    
# References #

- [Search API](http://www.yelp.com/developers/documentation/v2/search_api)
- [Business API](http://www.yelp.com/developers/documentation/v2/business)

# License #

Copyright (c) 2012 Olivier Lalonde <olalonde@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
