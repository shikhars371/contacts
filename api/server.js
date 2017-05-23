// var db = require('./model/db');
// var {User} = require('./model/user.js');
var db = require('../model/db.js');
var User = require('../model/user.js');
//var MongoClient = require('mongodb').MongoClient;
//var url = 'mongodb://localhost/Contacts';

var sess;
var sessionnn;

function saveformdata(req,res,next)
{

    sessionnn=req.session;
    console.log("DAnagal"+sessionnn.username);
  
  if (sess)
  {

    console.log("valuee",sess);

    var name=req.body.name;
    var email=req.body.email;
    var number=req.body.number;

    console.log(sess);


     var user = new User.User(
         {
             admin: sess,
            name: name,
            email: email,
            number: number
        });

    

     user.save(function (err) {
         if (err) console.log ('Error on save!')
     });

    res.json({status: "Success"});
  }
  else
  {
        res.json({status: "Failure"}); 
  }


}

function getformdata(req,res,next)
{




    User.User.find({admin:sess},function (err, users) {
  if (err) return console.error(err);
 // console.log(users);

  res.json(users);

})

}



function deleterow(req,res,next)
{
    console.log("afterIDD"+req.body.id);

  //  var USERS = mongoose.model('users', User);
  User.User.find({_id:req.body.id}).remove().exec();

  res.json({status :"DeletedSuccessfully"});

}

function saveeditform(req,res,next)
{
    


  User.User.update({_id: req.body.id}, {$set: {name: req.body.name,
            email: req.body.email,
            number: req.body.number
            }}, 
            function (err) {
                console.log(err);
            }
        );

 
 res.json({status: "Success"});

}

function saveuseradmin(req,res,next)
{
    var user_name=req.body.user_name;
    var user_password=req.body.user_password;

  

     var user_admin = new User.User_admin(
         {
            admin_user_name: user_name,
            admin_password: user_password
           
        });

     user_admin.save(function (err) {
         if (err) console.log ('Error on save!')

         console.log ('save!')

       sess =  user_name;
        
        sessionnn = req.session;
         sessionnn.username=user_name;

        
         //req.session.save();


        console.log(sess);
     });

    res.json({status: "Success"});
}

function checkuseradmin(req,res,next){


    var user_name_login=req.body.loginname;

    console.log("login user name",user_name_login);

   User.User_admin.find({admin_user_name : user_name_login}, function (err, docs) {
        if (docs.length){
            console.log('Name exists already',null);
              sess =  user_name_login;
        
            res.json({status: "Success"});

        }else{
            res.json({status: "Failure"});
            console.log('Name not exist',null);
        }
    });
   
  

}

function logout(req,res,next)
{
    
 sess="";
 res.json({status: "Success"});

}


module.exports={
    saveformdata,
    getformdata,
    deleterow,
    saveeditform,
    saveuseradmin,
    checkuseradmin,
    logout
}