


const getTodo=(resource)=>{
    
  return new Promise((resolve,reject)=>{
    const request= new XMLHttpRequest();
     console.log(resource);
      
      request.addEventListener('readystatechange',()=>{
  
        console.log(request.readyState);
          
       if((request.readyState===4) && (request.statusText==='OK'))
         {
       
       const data=JSON.parse(request.responseText);
       
         resolve(data);
         }
  //  else if((request.readyState===4) && (request.status===304)){
  
  //     callback(undefined,request.responseText);
  //  }
    
       else if(((request.readyState===4) && (request.status===404))){
  
          reject('couldn\'t fetch the target resource');
         }
  
  });
      
     request.open('GET',resource);
     request.send();
  
});
}

  
  // const promise= ()=>{


  //     return new Promise((resolve,reject)=>{

  //         resolve('resolved successfully');
  //         reject('oops! ur request has been rejected');



  //     }

  //     );
  // };
  
  
  //  promise().then(data=>{

  //   console.log(data)
  //  },err=>{
  //    console.log(err);
  //  });
  

  // promise().then(data=>{
  //   console.log(data);

  // }).catch(err=>{
  //   console.log(err);
  // })
   
  
  getTodo('async.json').then(data=>{

    console.log('promise 1 has been resolved :',data);
    
    return getTodo('async2.json');
  }).then(data=>{

    console.log('promise 2 has been resolved :',data);
    return getTodo('dumb.json');
  }).then(data=>{
    console.log("promise 3 has been resolved",data);
  }).catch(err =>{
    console.log(err);
  });

 




  








