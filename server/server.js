
var {mongoose}=require('./db/mongoose.js');

var Todo=require('./model/todo.js');

var {user} =require('./model/user.js');

var express=require('express');

var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.json());
// this is test comment
const API_KEY = "dddddd"
app.post('/todo',(req,res)=>{


var user3=new user({username:req.body.username,email:req.body.email});

user3.save().then((docs)=>{
  res.send(docs);
},(e)=>{
  res.status(400).send(e);
});
});

app.listen(3000,()=>{
  console.log('server is listen on port 3000');
});



// var user=user1.user;
//
//
//
//  var uservalidation=new user({username:'manish225',email:'mk6598'});
//
// uservalidation.save().then((docs)=>{
//  console.log(JSON.stringify(docs));
// },(e)=>{
//  console.log('something goes wrong',e);
// });



//var todos=new Todo({text:'sky is green'});

// var second=new Todo({text:'cat is bilii',completed:true,completedAt:25});
// second.save((err)=>{
//   if(err){
//     console.log('soory unable to connect the data base');
//   }
//   else{
//     console.log('welcome to the database');
//   }
// });
