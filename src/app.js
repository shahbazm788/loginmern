require('dotenv').config()
require("../db/conn");
const express = require("express");
const cors = require("cors");
// const regUserRouter = require("./routs/regUser"); 
const app = express();
const user = require("./routs/user");
const router = express.Router();
const login = require("./routs/login");    
const cookieParser = require('cookie-parser');
const fileUplode = require('express-fileupload');
const add_post_func = require("./routs/addpost");
const AddPost = require("../db/schemas/add_post_schema");
const updatepost = require('./routs/updatepost');
const deleatpost = require('./routs/deleatpost');
const regUser = require('./routs/regUser');
const userdata = require('./routs/usersdata');
const userupdate = require('./routs/updateuser');
const {Server} = require('socket.io');
const http = require("http");
const PORT = process.env.PORT;         
const getFrontUser = require("./routs/getfrontuser.js")

const addUser = require("../db/modules/addusermodule.js");
// const getFrontUser 
// const UserAdd = require("../db/schemas/frontenduseradding");
// const PORT = 5000;

app.use(express.json());
// app.use(cors());
app.use(cors({
  credentials: true,
      origin: ["http://localhost:5173","http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
     
    })
  );
  app.use(express.static('public'))
// app.use('/registor',regUserRouter);
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
   const uploadePath = __dirname + '../../uploads/' + fileName;
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

// start add post
app.post('/addpost',(req,res) => {
  add_post_func(req,res)

  
}) 



  
// geting posts 
app.get("/posts",async (req,res) => {
    const posts = await AddPost.find();
    res.send(posts);
    console.log("getting someone");
});




// start adding new user from front end
app.post("/addusers", (req,res) => {
 addUser(req,res);
  // console.log(req.body);
});
//geting fronend user
// app.get("/getuser",(req,res) => {
//   // console.log(req.cookies);
// getFrontUser(req.res);

// }) 

app.use("/getuser",getFrontUser)

// updateuser
//  app.post('/updateuser',(req,res) => {
//   console.log(req.body)
//   console.log(req.cookies)
//  })

// app.listen(PORT);

// const http_server = http.createServer(app);
// const io = new Server(http_server,{
//   cors:{
//       origin:["http://localhost:3000","http://localhost:5173"],
//       methods : ["GET","POST"]
//   }
// });
// io.on("connection",(socket) => {
//   // console.log(socket.id);
//   socket.on("join_room", (data) => {
//       socket.join(data.room)
//     console.log(data)
//       socket.emit("send_room_info",data)
//   });
//   socket.on("send_message", (data) => {
     
//      socket.to(data.joiendRoom).emit("recive_message",data)
         
//   });
  

// })











// http_server.listen(PORT,() => {
//   console.log(`express server runing on port ${PORT}`)
// })
app.get("/", (req,res) => {
  res.send("loded");
});
app.listen(PORT,() => {
  console.log(`express server runing on port ${PORT}`)
})

// app.post('/upload', upload.single('file'), (req, res) => {
//     // Handle the uploaded file
//     res.json({ message: 'File uploaded successfully!' });
//   });




















  

