var mongoose=require('mongoose');

mongoose.Promise = global.Promise;

var User = mongoose.model('Users',{
    admin:{
        type: String
    },
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

var User_admin = mongoose.model('Admin',{
    admin_user_name:{
       type: String,
       require:true
    },
    admin_password:{
   
     type: String,
     require:true,
     minlength: 1
    }
   
});


module.exports={
    User:User,
    User_admin:User_admin
};