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
const {Server} = require('socket.io');
const http = require("http");
const PORT = process.env.PORT;         
const getFrontUser = require("./src/routs/getfrontuser.js")

const addUser = require("./db/modules/addusermodule.js");

// app.use(express.json());



app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
