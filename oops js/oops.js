
//object returned with all the methods but not in the case of string and number, whats the reason? 
// if a string  or number has been created, if we wanna do something on it, it will be wrapped with a temporary object in which it can implement the methods and properties, so after implementing all the things ,the  respective value will be returned;

class user
{

     score1=0;

   constructor(username,email)
    {
        this.username=username;
        this.email=email;
        this.score=0;
    }

  login()
  {

    
    console.log(`this is ${this.username}logged in `);
    return this;
  }

 

  logout()
  {

     console.log(`this is ${this.username} logged out`);
     return this;

  }

  scorecal()
  {
     
    console.log(this.score);
    this.score+=1;
    return this;
   


  }

}

class Admin extends user
{


    constructor(username,email,title)
    {


      
     super(username,email);
      this.title=title;




    }

   deleteUser(target_user)
   {


    users=users.filter(user=>{


        console.log('inside the filter method',users,user);
        return user.username = target_user.username;
 
    })
      


   }


}

 // new key word does the following:
    //it creates a new empty object{};
    //it binds the value of 'this' to the new empty object
    // it calls the constructor function to 'build' the object

    const sanjay=new user('sanjay1234','sanjay126@gmail.com');
    const dharani=new user('dharani1234','dharani1234@gmail.com');
    const admin=new Admin('admin','admin1234@gmail.com','radiant admin');
    const pinku=new user('pinku','pinku1234@gmail.com');
    const yoru=new user('riftwalker','riftwalker1234@gmail.com');

    console.log(sanjay,dharani);
    console.log(admin);

    // sanjay.login();
    // sanjay.logout().login();    //chaining methods 
    // sanjay.scorecal().scorecal().scorecal();
  
    let users=[sanjay,dharani,yoru,pinku];

   
    

    // console.log('before deleting the users',users);
    
    //   admin.deleteUser(sanjay);
    //   admin.deleteUser(yoru);
      

    //   console.log('after deleting the users',users);
    //   console.log(sanjay);
    //   console.log(yoru);
    //   console.log(pinku);
      




    // sanjay.scorecal().scorecal(); ==> error // chaining possible if the prev  expression returns an object //
    

   