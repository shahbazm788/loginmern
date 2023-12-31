const express = require('express');
const router = express.Router();
const AddPost = require('../../db/schemas/add_post_schema');
const RegistedUser = require("../../db/schemas/userregistor");
const path = require('path');
const jwt = require("jsonwebtoken");
const fileUplode = require('express-fileupload');




const backstep = path.join(__dirname,'../../public');



router.post('/', async (req,res) => {

    if(req.cookies.jwt === null){
        res.send("identity not Valid")
    }
    else{
        const {id,heading,content,post_img,file,posted_by} = req.body;
        const jwtToken = req.cookies.jwt;
       
        const userId = jwt.decode(jwtToken)._id;
        const user = await RegistedUser.findById({_id:userId});
        if(user){
             const postFilter = {_id:id};
                const post = await AddPost.findOne(postFilter);
                if(req.files !== null){
                const file = req.files.file;
                const fileName = req.files.file.name;
                const uplodepath = backstep +'/img/' + fileName;
                    file.mv(uplodepath, err => console.log(err));
                
                    const updatedPost = await AddPost.findOneAndUpdate(postFilter,{
                        postHeading:heading,
                        post_body:content,
                        post_img:fileName,
                        posted_by,
                        last_update: new Date()
                    },{new:true});
                    console.log(updatedPost)
                }
                else{

                }
        }
        else{
            res.send("identity not Valid")
        }
       
    }
   
   

})






module.exports = router;