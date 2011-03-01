var http = require('http'),
    version = process.version;
var exports = module.exports;

if (version.indexOf('v0.2') >= 0) {
    exports.request = function(opts, cb) {
        var client = http.createClient(opts.port, opts.host),
            headers = {host: opts.host+((parseInt(opts.port, 10) !== 80)?':'+opts.port:'')},
            req = client.request(opts.method, opts.path, headers);
        req.on('response', cb);
        if (opts.method.match(/get/i)) {
            req.end();
        }
        return req;
    }
} else {
    exports = http;
}
