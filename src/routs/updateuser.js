

const express = require('express');
const router = express.Router();
const RegistedUser = require("../../db/schemas/userregistor");
const jwt = require("jsonwebtoken");






//user updating function
const updateUser = async (userId,value) => {
  return await RegistedUser.findByIdAndUpdate({_id:userId},{role:value},{new:true});
}



router.post('/', async (req,res) => {
  if(req.cookies.jwt){
    const token =req.cookies.jwt;
   const varifiyUser = jwt.verify(token,process.env.SECRET_KEY);
  

   //console.log(varifiyUser);
    if(!varifiyUser){
        res.send(false)
    }
    else{
        const getUser = await RegistedUser.findOne({_id:varifiyUser._id}) ;
        // const {name, email,age,phone} = getUser;
        // res.json({name,email,age,phone})
       if(getUser.role === "owner"){
          const {userId,value} = req.body;
          const chackUserRole = await RegistedUser.findOne({_id:userId}) ;
          if(chackUserRole.role === "owner"){
            res.send("cannot change user role")
            console.log('cannot change user role')
          }
          else{
               const updateRes = await updateUser(userId,value);
               res.send('update Successfulliy')
          }
         
          
    
       }
    }
}

})




module.exports = router;