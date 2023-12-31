
var mongoose = require('mongoose');
// mongoose.connect(
//     process.env.DB,
//     { useNewUrlParser: true })
//      .then(() => console.log('connected'))
//      .catch( (error) => error);
  

mongoose.connect("mongodb://localhost:27017/my_database",
    { useNewUrlParser: true })
     .then(() => console.log('connected'))
     .catch( (error) => error);