
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello w');
        res.end();
    } 

    if (req.url === '/api/numbers') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('new connection lol');
});

server.listen(3000);

console.log('Listening on port 3000...');
