HTTP Compatability Library
========

This library exists only for the purposes of library developers that need to, for whatever reason, support both 0.2.x and 0.4.x. It doesn't implement the full api set of 0.4.x for the 0.2.x but it at least sets up requests such that you can make them and do the things you'd expect. If you want it to do more, look for the FORK button above.


Usage
========

      var http = require('http_compat');
      var req = http.request(options, function(res) {
          res.on('data', function(chunk) {});
          res.on('end', function() {});
      });
      //if you're doing a post, be sure to write and end your req.
      // req.write('hibidy=hobidy');
      // req.end();

License
========

MIT
