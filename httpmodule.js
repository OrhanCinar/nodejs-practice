const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Hello world from nodejs');
    } else {
        res.write('other domain');
    }

    res.end();
});

server.listen('3000');