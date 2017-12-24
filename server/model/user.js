var mongoose=require('mongoose');

var sceama={username:{
  type:String,
  required:true,
  trim:true
},
email:{
  type:String,
  required:true,
  trim:true
}

};

var user=mongoose.model('user',sceama);

module.exports={user};
