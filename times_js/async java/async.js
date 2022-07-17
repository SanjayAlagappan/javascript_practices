


const getTodo=(resource,callback)=>{
    
  const request= new XMLHttpRequest();
 console.log(resource);
    
    request.addEventListener('readystatechange',()=>{

      console.log(request.readyState);
        
     if((request.readyState===4) && (request.statusText==='OK'))
       {
     
     const data=JSON.parse(request.responseText);
     
       console.log(data);
       console.log('entered here!');
       callback(undefined,data);
       }
//  else if((request.readyState===4) && (request.status===304)){

//     callback(undefined,request.responseText);
//  }
  
     else if(((request.readyState===4) && (request.status===404))){

        callback('couldnt fetch the data',undefined);
       }

});
    
   request.open('GET',resource);
   request.send();

};



getTodo('async2.json',(err,data)=>{ 
  
     console.log('async file data',data);
    
 
     getTodo('dumb.json',(err,data)=>{
      console.log('dumb.json file ',data);
    
     
    });
    
});





console.log('heyo im at last line in file but i will be executed before callback tho :)');













