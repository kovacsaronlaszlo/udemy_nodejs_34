const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>'); // write some data to th response
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message"method="POST"><input type="text" name="message"> <button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html'); // key of the response, and content type of the response
    res.write('<html>'); // write some data to th response
    res.write('<head><title>My first node page</title></head>');
    res.write('<body><h1>Hello from my first node js server</h1></body>');
    res.write('</html>');
    res.end();
};

/* one way to export code */
// module.exports = requestHandler;

/* second way to export code */
module.exports = {
    handler: requestHandler,
    sometext: 'some hard coding test'
};

/* third way to export code */
// module.exports.handler = requestHandler;
// module.exports.sometext = 'some hard coding test';

/* fourth way to export code */
// exports.handler = requestHandler;
// exports.sometext = 'some hard coding test';
