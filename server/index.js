const htttp = require("http")
const server = htttp.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("hi this is my first nodejs server");
    }
    else if(req.url ==="/download"){
        res.end("hi this is my first download page");  
    }
    else if(req.url ==="/about"){
        res.end("hi this is my first about page");  
    }
    else{
        res.end("404: Page could not be found");  
    }
    })
    


server.listen(3000,()=>{
    console.log("server listeningi on port nooooo no 3000");
})