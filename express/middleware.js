 function agedetector(req,res,next)
{
    if(req.query.age>18){
      next();   
    }
    else{
        res.send("u can not acces this website");
    }
} 
module.exports =agedetector;