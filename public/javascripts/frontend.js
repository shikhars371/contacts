var obj={};
var delete_cell={};
var update_cell={};
var user_admin_object={};



function tohomepage(){

  
    var user_admin_name=document.getElementById("signup_user_name");
    var user_password=document.getElementById("signup_user_password");
   
  

   if(user_admin_name.value && user_password.value)
   {

       user_admin_object.user_name=user_admin_name.value
    user_admin_object.user_password=user_password.value
    
       console.log("notempty");

         axios.post("http://localhost:3000/api/saveuseradmin",user_admin_object)
    .then((res)=>{
        if(res.data.status === "Success")
        {

           window.location="/"
           
        
        }
    }).catch(function(err){
        console.log(err);
    });

   }
   else{
       alert("Please Fill All Required Field");
       
   }

  
   
}

function checkandlogin()
{
       var user_admin_name=document.getElementById("user_name");
   
    console.log("shikharr",user_admin_name.value);
        if(user_admin_name.value && user_password.value)
   {
       user_admin_object.loginname=user_admin_name.value;
     
               axios.post("http://localhost:3000/api/checkuseradmin",user_admin_object)
    .then((res)=>{
        if(res.data.status === "Success")
        {

           window.location="/"
           
        
        }
        else
        {
            alert("Please Fill valid credentials Field");
       
        }

    }).catch(function(err){
        console.log(err);
    });
   }

}


