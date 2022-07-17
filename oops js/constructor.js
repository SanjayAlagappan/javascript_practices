

function user(username,email){


this.username=username;
this.email=email;


}


user.prototype.login = function() {
    

console.log(`hey ${this.username}!! login successful :)`);
return this;

}
user.prototype.logout = function() {
    

    console.log(`logout successful :(  See ya later`);
    return this;
    
    }

const sanj=new user('sanjay','sanjay12@gmail.com');

console.log(sanj);

sanj.login().logout();
