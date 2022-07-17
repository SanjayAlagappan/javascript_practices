const resetter=document.querySelector('.reset');
const form=document.querySelector('form');
const inputs=document.querySelector('input');


console.log(resetter);




// inputs.addEventListener('keyup',event=>
// {

//      event_key=event.key;
//    if(event.key=='Enter')
//    {
      
//        alert('u cant click enter');
//    }

    
// });

form.addEventListener('submit',e=>{

    e.preventDefault();
    console.log(`email   : ${form.email.value}
password: ${form.password.value}`);
  console.log('form has been successfully submitted');
  form.reset();


});

resetter.addEventListener('click',event=>{

    
    event.preventDefault();
    form.reset();
  
 
    
 
 
 });



 