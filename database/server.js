const express = require("express");
const app = express();
const user = require("./connection")

// post get patch delete 
// post - data send to database
//get get the data from database
// patch - update the data in database
// delete delete the data from database
app.use(express.json());

app.post("/",async(req,res)=>{
    try {
        const senddata = new user(req.body)
        const savedata = await  senddata.save(); 
        res.send(savedata); 
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get("/user",async(req,res)=>{
    try {
        const getdata = await user.find({});
        res.send(getdata); 
    } catch (error) {
        res.status(404).send(error);
    }   
})

app.get("/user/:id",async(req,res)=>{
    try {
        const id =req.params.id;
        const getiddata =await user.findById({_id:id})
        res.send(getiddata);
    } catch (error) {
        res.status(404).send(error);
    }    
})

app.post("/login",async(req,res)=>{
    try {
        const useremail = req.body.email;
        const getemail = await user.findOne({email:useremail})
        res.send(getemail); 
    } catch (error) {
        res.status(404).send(error);
    }
  
})

app.patch("/update/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedata = await user.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.send(updatedata) 
    } catch (error) {
        res.status(500).send(error);
    }
})
app.delete("/delete/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const deletedata = await user.findByIdAndDelete({_id:id})
        res.send(deletedata);
    } catch (error) {
        res.status(500).send(error);
    }
})


app.listen(3000,()=>{
    console.log("server succesfully created");
})