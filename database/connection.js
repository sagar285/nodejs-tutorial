const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/nodejstutorial').then(()=>{
    console.log("connection succesfull");
}).catch((e)=>{
    console.log(e);
})

const schema = new mongoose.Schema({
    name:String
})

const user= mongoose.model("user",schema);
module.exports=user;