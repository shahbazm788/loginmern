
const router = require("express").Router();
const UserAdd = require("../../db/schemas/frontend_user_adding.js")
const jwt = require("jsonwebtoken")




const getFrontUser =  async (req,res) => {
    const jwtToken = req.cookies.front_jwt;
    const userId =  jwt.decode(jwtToken);
    const userInfo = await UserAdd.findOne({_id:userId._id});
    // console.log(userInfo)
    // console.log(userId)
    res.send(userInfo)
}



router.get("/",(req,res) => {
    getFrontUser(req,res);
})

router.post("/login", async (req,res) => {
    // getFrontUser(req,res);
    const userInfo = await UserAdd.findOne({"email":req.body.email});
    res.cookie("front_jwt",userInfo.tokens[0].token,{
        withCredentials: true,
        httpOnly: false,
      });
    res.send(userInfo)
    // console.log(userInfo.tokens[0].token)
    // console.log(req.body)
})
// module.exports = getFrontUser;
module.exports = router;