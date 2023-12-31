const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretkey = process.env.SECRET_KEY;



const addPostSchema = new mongoose.Schema({
    postHeading:{
        type:String,
        min: 5,
        tolowercase:true,
        trim:true,  
    },
    post_body:{
        type:String,
        min:50,
        tolowercase:true,
        trim:true

    },
    post_img:{
        type:String,
        min: 5,
        tolowercase:true,
        trim:true
    },
    posted_by:{
        type:String,
        min:2,
    },
    posted_at:{
        type: Date,
       
    },
    last_Update:{
        type: Date
    }
});


const AddPost = new mongoose.model('AddPost',addPostSchema);
module.exports = AddPost;