

const async1= async()=>{

   
  const sanjay= await fetch('dumb.json');

  console.log(sanjay.status);
  if(sanjay.statusText!='OK')
  {
      throw new Error('the link broken bish,check and fix em!');
  }

  const sanj= await sanjay.json();
   return sanj;
}




const sanju=async1().then(data=>{
    console.log('promise resolbed',data);
}).catch(err=>{

    console.log(err.message);
});



// fetch('async.json').then(response=>{
//     console.log('resolved',response);
    
//    return response.json();
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{

//     console.log('rejected',err);
// });



// localStorage.setItem('name','sanjay');
localStorage.setItem('age',10);


localStorage.setItem('name','sanju');
let sanj=localStorage.getItem('name');
let age=localStorage.getItem('age');
localStorage.clear();
console.log(sanj);
console.log(age);

localStorage.age=15;
localStorage.removeItem('name');
console.log(localStorage.name);
console.log(localStorage.age);
age=localStorage.getItem('age');

console.log(age);




const arr=[{name:'sanjay',id:223,mail:'sanjay.it19@bitsathy.ac.in',department:'IT'},{name:'sanjay',id:223,mail:'sanjay.it19@bitsathy.ac.in',department:'IT'},{name:'sanjay',id:223,mail:'sanjay.it19@bitsathy.ac.in',department:'IT'}];

const new_arr=JSON.stringify(arr);

console.log("This haves the array value that we converted to json string",new_arr);

const b_new_arr=JSON.parse(new_arr);
console.log(b_new_arr);






