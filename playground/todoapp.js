//
// var {MongoClient,ObjectId}=require('mongodb');
//
// //console.log(obj);
// MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{
// if(err)
// {
//   return console.log('unable to connect the database');
// }
// console.log('connected to database');
//
// db.collection('Todos').find({name:'manish'}).toArray().then((docs)=>{
//
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('error to connected',err);
// });

// db.collection('Todos').insertOne({name:'manish',age:25,pass:'123550'},(err,results)=>{
//
// if(err)
// {
//   return console.log('unable to connect user');
// }
// console.log(JSON.stringify(results));
// });


// db.collection('Todos').insertOne({test:'something is added in todo',
// completed:false
// },(err,results)=>{
// if(err)
// {
//   return console.log('something goes wrong');
// }
//
// console.log(JSON.stringify(results.ops));
//
// });

  //db.close();
//});

var {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{
  //error handling
if(err){
  return console.log('unable to connect to mongodb');
}

//documentation
console.log('connected to mongodb');

db.collection('Todos').find({}).toArray((err,docs)=>{
  if(err)
  {
    return console.log('unable to fetch error');
  }
  console.log(JSON.stringify(docs,undefined,2));
});

db.close();
});
