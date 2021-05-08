var base_count;
$(document).ready(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
      var list_data="";

      $.each(data,function(key,val){
       if(val.completed==true)
       {
        list_data+="<tr>";
          list_data+="<td><input type='checkbox' id='chek'checked disabled/>"+val.title+"</td>";
          
       }
       else
       {
        list_data+="<tr>";
        list_data+="<td><input type='checkbox'/>"+val.title+"</td>";
       }
          list_data+="</tr>";

      });
      $("#list-table").append(list_data);

     base_count=document.querySelectorAll('input[type="checkbox"]:checked').length;
      console.log(base_count); 

    });

    
var promise=new Promise(function(resolve,reject){
    console.log(base_count);
    $("table").on("change", ":checkbox", function() {
        
        var count=document.querySelectorAll('input[type="checkbox"]:checked').length;
    
        console.log(count); 
    
        if(count==base_count+5)
        {
            resolve("Congrats. 5 Tasks have been Successfully Completed"); 
        }
        
      
    });
          
 
  
});

promise.then(function(data){
    alert(data);
  });




          });
          






     
 
 
 
