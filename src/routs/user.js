
// const cookieParser = require('cookie-parser');

const RegistedUser = require("../../db/schemas/userregistor");
const jwt = require("jsonwebtoken");

const user =  async (req,res) => {
    if(req.cookies.jwt){
        const token =req.cookies.jwt;
       const varifiyUser = jwt.verify(token,process.env.SECRET_KEY);
      

       //console.log(varifiyUser);
        if(!varifiyUser){
            res.json(false)
        }
        else{
            const getUser = await RegistedUser.findOne({_id:varifiyUser._id}) ;
            const {name, email,age,phone} = getUser;
            res.json({name,email,age,phone})
        }
    }
}



module.exports = user;