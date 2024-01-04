const RegistedUser = require("../../db/schemas/userregistor");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cookies = require("cookie-parser");
require("dotenv").config();
const bcrypt = require('bcrypt');


const login = async  (req,res,next) => {
    if(req.cookies.jwt){
        // console.log(res.cookies.jwt);
        res.send(true);
          res.cookie("jwt", req.cookies.jwt, {
               withCredentials: true,
               httpOnly: false,
             });
        console.log(req.cookies);
    }
else{

    // destructring req.body object
    const {email,password} = req.body;
       // console.log(req.cookies)
    try {
        // fiding user by emaill
        const getData = await RegistedUser.findOne({email:email});
        //geting user id
        const _id = getData._id;
        const userPass = getData.password;

     bcrypt.compare(password,userPass, async ( err,result) => {
        if(result){
               //genrating jwt token
               const token = await  getData.genreatToken();
            
               //updating user token
               const updatetUser = await RegistedUser.findOneAndUpdate({_id},{$set:{
                   tokens: {token}
               }},{
                   new:true
               })
           
               // sending token with cookeis to browser
           res.cookie("jwt", token, {
               withCredentials: true,
               httpOnly: false,
             });
           // sending respons to clinte side
           res.json(updatetUser)
            console.log(updateUser);
        }
        else{
            res.send('login failed')
        }
     })
       
    } catch (e) {
        console.error('Error', e)
    }
}
    
}


module.exports = login;
