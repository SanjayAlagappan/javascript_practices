const time=document.querySelector('p');

let count=0;
setInterval(() =>{

 count++;

 time.textContent=`you have been in this site for ${count} secs`;


console.log(count);

},1000)