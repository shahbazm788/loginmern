const express = require('express');
const router = express.Router();

const RegistedUser = require("../../db/schemas/userregistor");
const jwt = require("jsonwebtoken");



const users = async () => {
    return await RegistedUser.find();
}
const getUser = async (req,res) => {
    if(req.cookies.jwt){
        const token =req.cookies.jwt;
       const varifiyUser = jwt.verify(token,process.env.SECRET_KEY);
      

       //console.log(varifiyUser);
        if(!varifiyUser){
            res.json(false)
        }
        else{
            const getUser = await RegistedUser.findOne({_id:varifiyUser._id}) ;
            // const {name, email,age,phone} = getUser;
            // res.json({name,email,age,phone})
           if(getUser.role === "owner"){
            const usersData = await users();
            if(usersData){
               
               const usersMap = usersData.map((item,i) => {
                            const itemObj = {
                                userId:item._id,
                                userName: item.name,
                                userEmail:item.email,
                                userDP:item.userDP,
                                userRole:item.role,
                            }
                    return itemObj;

                    /*`<Row>
                      <Col sm={3}>${item.name}</Col>
                      <Col sm={3}>${item.email}</Col>
                      <Col sm={2}><img src="../../img/${item.userDP}" /></Col>
                      <Col sm={2}>${item.role}</Col>
                      <Col sm={2}>1</Col>
                    </Row>` */
                })
                res.send(usersMap);
                console.log("data sended")
            }
        
           }
        }
    }
}
router.get('/',(req,res) => {

    getUser(req,res)
})

module.exports = router;