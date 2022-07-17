let sanjay=document.querySelector('.sanjay');

let sanju=document.querySelector('.form1')

console.log(sanjay);



sanju.addEventListener('submit',e=>{
    let temp;
    let sa=0;
    e.preventDefault();
    
    temp=e.target.number.value;
    
   
    console.log(`submitted ${temp}`);
    
      for(i=1;i<=temp/2;i++)
      {
        
        if(temp%i===0)
        {
            
           sa+=i;

        }

      }
console.log(temp,sa);
 if(sa==temp)
 {
    sanjay.textContent=`${e.target.number.value} is a perfect number`;
 }
else{

    sanjay.textContent='its not a perfect number';
}



});

