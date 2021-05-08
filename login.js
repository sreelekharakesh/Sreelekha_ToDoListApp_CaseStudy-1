
function validate(callback)
{
    
var a=document.getElementById("user").value;
   var b=document.getElementById("passwd").value;
  
    return callback(a,b);
}
function check(x,y)
{
    
    if(x=="admin"&&y=="12345")
{        
    return true;
}
else
{
    alert("Incorrect Password or User Name");
    x="";
    y="";
        return false;
}    
}

