
const sanjay=document.querySelectorAll('li');
const sanju=document.querySelector('ul');

 const button=document.querySelector('button');

 button.addEventListener('click',()=>{


  const li=document.createElement('li');
  li.innerText='this is something new';
  sanju.append(li);


 })


 sanju.addEventListener('click', e=>{

console.log(e);

   if(e.target.tagName==='LI')
   {
     e.target.remove();
   }

 
 })





  
//  sanjay.forEach(items =>{
   
//   items.addEventListener('click',e =>
//  {
   
//    e.target.style.textDecoration ='underline';

   


//  })


//  })









  //  sanjay.forEach((data)=>{
     

    
    
  //   data.addEventListener('click',()=>{

      
  //     sanju.innerHTML +='<li>this is something new</li>';
      
      
  //     console.log('check the browser for change in list');

  //   })
  

    
  // })










/*

sanjay.classList.add('hello');


sanjay.classList.remove('sanjay');
console.log(sanjay.classList);

sanjay.classList.toggle('sanjay');
console.log(sanjay.classList);

sanjay.setAttribute('style','color:crimson' );
sanjay.setAttribute('style','class:hello');

console.log(sanjay.style);

sanjay.style.color='crimson';
sanjay.style.fontSize='1250px';*/

 