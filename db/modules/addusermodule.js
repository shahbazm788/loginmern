const Addusers  = require("../schemas/frontend_user_adding");
// const cookies = require("cookie-parser");



async function addUser  (req,res) {
    try {
        const newUser =  new Addusers(req.body);
        const token = await newUser.genrateToken();
        const result = await newUser.save();
        // console.log(token)
        res.cookie("front_jwt",token,{
            withCredentials: true,
            httpOnly: false,
          });
        res.send(result);
     
        console.log(result);
    } catch (e) {
        console.error('Error', e)
    }
    // console.log(req.body);
    
}
module.exports = addUser;