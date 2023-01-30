const express =require("express");
const path = require("path");
const app = express()


 const pathdir=path.join(__dirname,'public')
 app.use(express.static(pathdir))



app.get("/",(req,res)=>{
 res.sendFile(`${pathdir}/inde.html`);
})
app.get("/about",(req,res)=>{
    res.sendFile(`${pathdir}/home.html`);
   })
   app.get("/download",(req,res)=>{
  res.download(`${pathdir}/inde.html`)
   })

app.listen(3000,()=>{
    console.log("server established");
})