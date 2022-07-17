const clock=document.querySelector('.clock');

console.log(clock);
const sanjay=new Date();
const before=new Date('March 1 2021 19:00');
console.log(before);

const diff=dateFns.distanceInWords(sanjay,before,{addSuffix:true});
console.log(diff);

console.log(dateFns.isToday(sanjay));
console.log(dateFns.format(sanjay,'Do'),dateFns.format(sanjay,'MMM'),dateFns.format(sanjay,'YYYY'));
console.log(dateFns.format(sanjay,'a'));






let html;

const time= ()=>{

    const sanjay=new Date();
     let h=sanjay.getHours();
     if(h>12)
     {
         h=h-12;
     }
     const m=sanjay.getMinutes();
     const s=sanjay.getSeconds();


    html=`<span>${h}</span>:
          <span>${m}</span>:
          <span>${s}</span>
    `;
    
    clock.innerHTML=html;
    

};


setInterval(time,1000);




























// console.log(sanjay.getDate());
// console.log(sanjay.getMonth());
// console.log(sanjay.getDay());
// console.log(sanjay.getFullYear());
// console.log(sanjay.getMinutes());
// console.log(sanjay.getSeconds());
// console.log(sanjay.getHours());


// console.log(sanjay.getTime());


// console.log(sanjay.toDateString());
// console.log(sanjay.toTimeString());
// console.log(sanjay.toLocaleString());
// console.log(sanjay.toLocaleDateString());
// console.log(sanjay.toLocaleTimeString());











