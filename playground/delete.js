

var {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{
  //error handling
if(err){
  return console.log('unable to connect to mongodb');
}

//documentation
console.log('connected to mongodb');

//delete

// db.collection('Todos').deleteMany({name:'vikash'}).then((err,results)=>{
// if(err)
// {
//   return console.log('unable to find');
// }
//
//   console.log(results);
// });
//deletemany
db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);
})

//

db.close();
});
