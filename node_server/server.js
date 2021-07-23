/*var http=require('http');

http.createServer(function (request, response){
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write('Hello nodeJs');
  response.end();
}).listen(8888); */

/*var http = require('http');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write('Hello World');
  response.end();
}
http.createServer(onRequest).listen(8888) */

/*var http = require('http');

function onRequest(request, response){
  console.log('request received.');
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write('Hello world');
  response.end();
}
http.createServer(onRequest).listen(8888)

console.log('server has started.'); */

/*var http = require('http');

function start() {
  function onRequest(request, response){
    console.log('request received.');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello world');
    response.end();
  }
  http.createServer(onRequest).listen(8888)

  console.log('server has started.');
}
exports.start = start;*/


var http = require('http');
var url = require('url');

function start(route, handle){
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log('request for '+pathname+' received.');

    route(handle, pathname,response); //injected function call
  }

  http.createServer(onRequest).listen(8888);

  console.log('server has started');


}
exports.start = start;
