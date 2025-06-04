const http = require('http');

const data = [
    {
        title: "javascript",
        body: 'learning node'
    },
    {
        title: "typescript",
        body: 'learning node'
    }
];

const server = http.createServer((req, res)=>{
    console.log(`Your Hiting URL 👉: ${req.url} and Your Methoud is 👉: ${req.method}`);
    if(req.url === '/todos' && req.method === "GET"){
        res.writeHead(201, {
            "content-type" : 'application/json',
            "email" : "example@gmail.com"
        })
        res.end(JSON.stringify(data))
        // res.end(`<h2>This is heading 2</h2> <h3>This is heading 3</h3> <h4>This is heading h4</h4>`) === >>> if we are want to pass the HTML  data. it's possiable
    }
    else if(req.url === '/todos/create' && req.method === "POST"){
        res.end('New Todo created 😀')
        res.statusCode = 201
    }
    else{
        res.end('Route Not found')
    }
})


server.listen(5000, '127.0.0.1', ()=>{
    console.log('✅ Server is running listening to port 5000');
})