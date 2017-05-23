var obj={};
var delete_cell={};
var update_cell={};
var user_admin_object={};


function getalldata(){

        axios.get("http://localhost:3000/api/getform")
            .then((response) => {

                console.log(JSON.stringify(response.data))
            
                showalldata(response.data);
                
                
            })
}
getalldata()

function showalldata(data)
{

    console.log("hello");

    var table = document.getElementById("mongotable");

    console.log(table);


    for(i=0;i<data.length;i++)
    {
         var row = table.insertRow(i+1);

        var name = row.insertCell(0);
       var email = row.insertCell(1);
       var number = row.insertCell(2);
      
       name.contentEditable = true;
       email.contentEditable = true;
       number.contentEditable = true;

      name.innerHTML=data[i].name;
        email.innerHTML=data[i].email;
        number.innerHTML=data[i].number;
       // console.log(data[i].name);

    var btn = document.createElement('input');
    btn.type = "button";
    btn.className = "btn";
    btn.value = "delete ";
    btn.id=data[i]._id;
    
    btn.onclick = function(){
       // console.log("initial "+this.id);
    deleterow(this.id);
                            };




   var submit_row = document.createElement('input');
    submit_row.type = "button";
    submit_row.className = "btn";
    submit_row.value = "save ";
    submit_row.id=data[i]._id;

 submit_row.onclick = function(){
       
       var rowIndexs= this.parentNode.rowIndex;
        console.log("rowindex "+rowIndexs);
        //table.rows.length);
               var name_cell= table.rows[rowIndexs].cells[0];
               var email_cell= table.rows[rowIndexs].cells[1];
               var number_cell= table.rows[rowIndexs].cells[2];
               
     

    editdata(this.id,name_cell.innerHTML,email_cell.innerHTML,number_cell.innerHTML);
};


    row.appendChild(submit_row);
    row.appendChild(btn);
  //   row.appendChild(update_but);



    }
}

function submitformdata(){



    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var number=document.getElementById("number");
    obj.name=name.value;
    obj.email=email.value;
    obj.number=number.value;

   // console.log("shikharrrr");

    axios.post("http://localhost:3000/api/saveform",obj)
    .then((res)=>{
        if(res.data.status === "Success")

        {
            axios.get("http://localhost:3000/api/getform")
            .then((response) => {

              //  console.log(JSON.stringify(response.data))

                showtabledata(response.data);

                
            })
        }
        else
        {
              alert("Session logout");
        }
    }).catch(function(err){
        console.log(err);
    });
}

function showtabledata(data){

 //   console.log(data);

deleterowall();

 var table = document.getElementById("mongotable");

 


    for(i=0;i<data.length;i++)
    {
         var row = table.insertRow(i+1);

        var name = row.insertCell(0);
       var email = row.insertCell(1);
       var number = row.insertCell(2);
      
       name.contentEditable = true;
       email.contentEditable = true;
       number.contentEditable = true;

      name.innerHTML=data[i].name;
        email.innerHTML=data[i].email;
        number.innerHTML=data[i].number;
       // console.log(data[i].name);

    var btn = document.createElement('input');
    btn.type = "button";
    btn.className = "btn";
    btn.value = "delete ";
    btn.id=data[i]._id;
    
    btn.onclick = function(){
       // console.log("initial "+this.id);
    deleterow(this.id);
};




   var submit_row = document.createElement('input');
    submit_row.type = "button";
    submit_row.className = "btn";
    submit_row.value = "save ";
    submit_row.id=data[i]._id;

 submit_row.onclick = function(){
       
       var rowIndexs= this.parentNode.rowIndex;
        console.log("rowindex "+rowIndexs);
        //table.rows.length);
               var name_cell= table.rows[rowIndexs].cells[0];
               var email_cell= table.rows[rowIndexs].cells[1];
               var number_cell= table.rows[rowIndexs].cells[2];
               
     

    editdata(this.id,name_cell.innerHTML,email_cell.innerHTML,number_cell.innerHTML);
};


    row.appendChild(submit_row);
    row.appendChild(btn);
  //   row.appendChild(update_but);



    }

}

function deleterowall()
{
   
    var table = document.getElementById("mongotable");

    var rowCount = table.rows.length;
    for(var  i = rowCount -1;i>0;i--)
    {
        table.deleteRow(i);
    }
}

function deleterow(id)
{
delete_cell.id=id;

 axios.post("http://localhost:3000/api/deleterow",delete_cell)
    .then((res)=>{
        if(res.data.status === "DeletedSuccessfully")
        {
            axios.get("http://localhost:3000/api/getform")
            .then((response) => {

              //  console.log(JSON.stringify(response.data))

                showtabledata(response.data);

                
            })
        }
    }).catch(function(err){
        console.log(err);
    });
}

function editdata(id,names,emails,numbers)
{
    console.log(id);
   
    
    update_cell.name=names;
    update_cell.email=emails;
    update_cell.number=numbers;
    update_cell.id=id;


    axios.post("http://localhost:3000/api/saveeditform",update_cell)
    .then((res)=>{
        if(res.data.status === "Success")
        {
            axios.get("http://localhost:3000/api/getform")
            .then((response) => {

              //  console.log(JSON.stringify(response.data))

                showtabledata(response.data);

                
            })
        }
    }).catch(function(err){
        console.log(err);
    });

}

function logout()
{
   axios.get("http://localhost:3000/api/logout")
            .then((response) => {

                console.log(JSON.stringify(response.data))
            
               // showalldata(response.data);
             
               window.location="/loggedin"
         
            
                
            })


}
