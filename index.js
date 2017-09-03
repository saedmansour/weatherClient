var StaticServer = require('static-server');

var server = new StaticServer({
  rootPath: './static_files',
  port: 9000,
  host: 'localhost'
});

server.start(function () {
  console.log('Server listening to', server.port);
});
