const form=document.querySelector('.signup');
// const username=document.querySelector('#username');
const feedback=document.querySelector('.feedback');
const pattern=/^[a-z]{6,10}$/;

  




form.username.addEventListener('keyup',e =>{
  console.log(e);
  console.log(e.target.value,form.username.value);

  if(pattern.test(e.target.value))

  {
    
    
   form.username.setAttribute('class','success');

  }

  else{


    
    form.username.setAttribute('class','error');
  }

})