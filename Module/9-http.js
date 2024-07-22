const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.write('Welcome to out homepage');
//     res.end();

// });
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end('Welcome to our homepage');
    }
    else if(req.url==='/about'){
        res.end("This is the about page");
    }
     else res.end(`
        <h1>Oops!</h1>
        <p>We ran into a problem</p>
        <a href='/'>homepage</a>
        `)
})
server.listen(3000);