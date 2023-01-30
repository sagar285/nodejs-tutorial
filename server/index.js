const htttp = require("http")
const fs = require("fs");
const server = htttp.createServer((req,res)=>{
    const jsondata = fs.readFileSync("api.json","utf-8");
    const objdata =JSON.parse(jsondata)
    if(req.url=="/"){
        res.end("hi this is my first nodejs server");
    }
    else if(req.url ==="/download"){
        res.end("hi this is my first download page");  
    }
    else if(req.url ==="/about"){
        res.end(objdata[0].name);  
    }
    else{
        res.end("404: Page could not be found");  
    }
    })
    


server.listen(3000,()=>{
    console.log("server listeningi on port nooooo no 3000");
    console.log(__dirname);
})