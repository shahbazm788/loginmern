const express = require('express');
const router = express.Router();
const AddPost = require('../../db/schemas/add_post_schema');
const RegistedUser = require("../../db/schemas/userregistor");
const fs = require('fs');

const jwt = require("jsonwebtoken");


const path=require('path');

// going one folder back
// let oneStepBack=path.join(__dirname,'../../myapp/img/');
let oneStepBack=path.join(__dirname,'../../public/img/');





router.delete('/', async (req,res) => {
    if(req.cookies.jwt === null){
        res.send("identity not Valid")
    }
    else{
       
        const jwtToken = req.cookies.jwt; 
        const userId = jwt.decode(jwtToken)._id;
        const user = await RegistedUser.findById({_id:userId});
        if(user){
         const requestedPostId = req.body.postId;
            const userName = user.name;
            const requestedPost = await AddPost.findById({_id:requestedPostId})
            const file_name = requestedPost.post_img;
            const deleatImg = fs.unlink(oneStepBack+file_name,(err) => err?err:"ok" );
            const removedfile = await AddPost.findOneAndDelete({_id:requestedPostId});
          res.send("opration Sucseessfull"); 
        }
        else{
            res.send("identity not Valid")
        }
     
       
    }
   
   

})






module.exports = router;