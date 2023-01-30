const fs = require("fs");
// non-blocking io model
// fs.writeFile("file.txt","data is added to file",()=>{
//     console.log("data is succesfully added");
// })

const b =fs.writeFileSync("file2.txt","data enterdd");
console.log(b);
console.log("simplyjs subscribe");
fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(err);
})
fs.appendFile("file.txt","data is not sucscnaskjdbdsjkvsbskjbsajkddsbj",(err)=>{
    console.log(err);
})
// fs.rename("file.txt","pathaan.txt",(err)=>{
//     console.log(err);
// })

fs.unlinkSync("pathaan.txt")
