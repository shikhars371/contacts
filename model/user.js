var mongoose=require('mongoose');

mongoose.Promise = global.Promise;

var User = mongoose.model('Users',{
    name:{
       type: String
    },
    email:{
     trim:true,
     type: String,
     require:true,
     minlength: 1
    },
    number:{
        trim:true,
        type:Number,
        require:true
    }
});


module.exports={
    User:User
};