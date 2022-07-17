const sanjay=document.querySelector('.box');

sanjay.addEventListener('mousemove',e=>
{

    console.log(e.offsetX,e.offsetY);


   sanjay.textContent=`x-position ${e.offsetX} & y-position ${e.offsetY}`;
   
    

    
})



// document.addEventListener('wheel',e=>
// {

//  sanjay.textContent=`X position after scroll ${e.pageX}  
//    Y position after scroll ${e.pageY}`;



// })

