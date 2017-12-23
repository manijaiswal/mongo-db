var MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{

db.collection('Todos').findOneAndUpdate({age:90},{
  $inc:{
    age:25
  }
},{
  returnOriginal:false
}).then((result)=>{

console.log(result.value);
})

  db.close();
});
