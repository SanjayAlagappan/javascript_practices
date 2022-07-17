const add=document.querySelector('.add');

const search=document.querySelector('.search input');

const todos=document.querySelector('.todos');


 
const filterList=typed_term =>{

   const otis=Array.from(todos.children).filter(data=>{

    
    return !data.textContent.toLowerCase().includes(typed_term);
    
   });

   console.log(otis);
  
   otis.forEach(data=>{

     data.classList.add('filtered');

   });

 const kio=Array.from(todos.children);

 kio.forEach(data=>{
   
    
    if(data.textContent.toLowerCase().includes(typed_term))
          data.classList.remove('filtered');
     
    
 

})
};

search.addEventListener('keyup',()=>{


const typed_term=search.value.trim().toLowerCase();

filterList(typed_term);

});



todos.addEventListener('click',e=>{

 
 if(e.target.classList.contains('delete'))
 {
     e.target.parentElement.remove();

 }

});


const generateTemplate=todo=>{
   
   
    todos.innerHTML+=`<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fa fa-trash-o delete" aria-hidden="true"></i>
    </li>`;
    
   



};


add.addEventListener('submit', e =>{

 e.preventDefault();

 const todo=e.target.add1.value.trim().toLowerCase();
 console.log(todo);
 if(todo.length)
   generateTemplate(todo);
   add.reset();






});