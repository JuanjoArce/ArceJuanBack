const http = require('http');

const server = http.createServer((req,res)=>{
res.end("Mi primer hola mundo desde backend")
})

server.listen(8080,()=>{
console.log("Listering on port 8080")
})