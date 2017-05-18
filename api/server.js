// var db = require('./model/db');
// var {User} = require('./model/user.js');
var db = require('../model/db.js');
var User = require('../model/user.js');
//var MongoClient = require('mongodb').MongoClient;
//var url = 'mongodb://localhost/Contacts';

function saveformdata(req,res,next)
{

    var name=req.body.name;
    var email=req.body.email;
    var number=req.body.number;

     var user = new User.User(
         {
            name: name,
            email: email,
            number: number
        });

     user.save(function (err) {
         if (err) console.log ('Error on save!')
     });

    res.json({status: "Success"});
}

function getformdata(req,res,next)
{
    
    User.User.find(function (err, users) {
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


module.exports={
    saveformdata,
    getformdata,
    deleterow,
    saveeditform
}