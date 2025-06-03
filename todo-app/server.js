const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('Wellcome to Todo App Server')
})


server.listen(5000, '127.0.0.1', ()=>{
    console.log('✅ Server is running listening to port 5000');
})