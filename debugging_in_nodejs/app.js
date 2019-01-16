const http = require('http');

const routes = require('./routes');

/**
 * request Listener
 * req - request
 * res - response
 */
// function rqListener(req, res) {
//
// }

// http.createServer(rqListener);
// http.createServer(function(req, res) { // same as above
//
// });
// const server = http.createServer((req, res) => { // same as above
//     // console.log(req.url, req.method, req.headers);
//     // process.exit(); // => if use the server shoot down, never use!!
//
//
// });

console.log(routes.sometext);

const server = http.createServer(routes.handler);

server.listen(3000);