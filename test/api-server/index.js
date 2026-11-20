
var restify = require('restify');

var server = restify.createServer();

server.get('/', async function(req, res) {
    res.send({
        Server: "Server is working very good!"
    });
});

var PORT = 8080;

server.listen(PORT, function() {
    console.log('%s listening at %s', server.name, server.url);
});
