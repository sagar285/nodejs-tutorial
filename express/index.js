const express =require("express");
const app = express()

app.get("/",(req,res)=>{
 res.send("hi this is first express route");
})
app.get("/about",(req,res)=>{
    res.send("hi this is first  about route");
   })
   app.get("/download",(req,res)=>{
    res.send("downlaod file");
   })

app.listen(3000,()=>{
    console.log("server established");
})