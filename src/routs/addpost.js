const AddPost = require('../../db/schemas/add_post_schema');
const RegistedUser = require("../../db/schemas/userregistor");
const express = require('express');
const jwt = require("jsonwebtoken");
const fileUplode = require('express-fileupload');
const uploadImgFunction = require('../controlers/uplodeimg.js');

require("dotenv").config();
const secretkey = process.env.SECRET_KEY;
const path=require('path');
const { accessSync } = require('fs');

// going one folder back
// let oneStepBack=path.join(__dirname,'../../myapp');
let oneStepBack=path.join(__dirname,'../../public');



const add_post_func = async (req,res,next) => {
    const comingJwt = req.cookies.jwt;
    const _id = jwt.decode(comingJwt)._id;
    const postHeading = req.body.heading;
    const post_body = req.body.content;
    const post_img = req.files.file.name;
    const  file = req.files.file;
    const user = await RegistedUser.findOne({_id});
    const posted_by = user.name;
    const posted_at = new Date();
  
 // setting image uploding path   
const uploade_path = oneStepBack +"/img/" + post_img;


    // Calling addpost module to add post in mongoDB
    const posted = AddPost({postHeading,post_body,post_img,posted_by,posted_at});

    //saving Post in mongoDB with module
 const postRes =  await posted.save();

 // chaking and uploding image in frontend folder
  if(postRes){
    const uplodedImg =  uploadImgFunction(file,uploade_path);
   
  } 
    res.send("ok")
}

module.exports =  add_post_func;