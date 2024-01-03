const express = require("express");
// const dotenv = require('dotenv').config();
const db = require("./db/conn");
const app = express();
const user = require("./src/routs/user");
const router = express.Router();
const login = require("./src/routs/login");    
const cookieParser = require('cookie-parser');
const fileUplode = require('express-fileupload');
const add_post_func = require("./src/routs/addpost");
const AddPost = require("./db/schemas/add_post_schema");
const updatepost = require('./src/routs/updatepost');
const deleatpost = require('./src/routs/deleatpost');
const regUser = require('./src/routs/regUser');
const userdata = require('./src/routs/usersdata');
const userupdate = require('./src/routs/updateuser');
// const {Server} = require('socket.io');
const http = require("http");
const PORT = process.env.PORT;         
const getFrontUser = require("./src/routs/getfrontuser.js")

const addUser = require("./db/modules/addusermodule.js");

// app.use(express.json());

app.use(cors({
  credentials: true,
      origin: ["https://loginmern-admin.vercel.app","https://blog-git-main-shahbazs-projects-37119fe0.vercel.app"],
      methods: ["GET", "POST", "PUT", "DELETE"],
     
    })
  );

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.use(cookieParser());
app.use(fileUplode());



app.use('/updatepost',updatepost);

app.use('/deleatpost',deleatpost);


// geting user data 
app.use('/usersdata',userdata);
//updateuser 




app.use('/updateuser',userupdate);
app.post("/login", (req,res) => {
    login(req,res);

})


app.post("/reg", (req,res) => {

    // going on regUser.js file for function called below
    regUser(req,res);
  // console.log(req.body); 

});

app.get("/user", (req,res) => {
  user(req,res);
})


//uploade files 
app.post("/upload", (req,res) => {
  let file = req.files.file;
  let fileName = file.name;
   const uploadePath = __dirname + './../uploads/' + fileName;
  //const uploadePath = __dirname + '/../myapp/src/img/' + fileName;

  // console.log(fileName);
  file.mv(uploadePath,(err) => {
    if(err){
      res.send(err) 
    }
    else{
      res.send("succecfully uploded")
      console.log('uploded')
    }
  })
  
})

// start add post/ start adding new user from front end
app.post("/addusers", (req,res) => {
 addUser(req,res);
  // console.log(req.body);
});


app.use("/getuser",getFrontUser)
app.post('/addpost',(req,res) => {
  add_post_func(req,res)

  
}) 



  
// geting posts 
app.get("/posts",async (req,res) => {
    const posts = await AddPost.find();
    res.send(posts);
    console.log("getting someone");
});


app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
