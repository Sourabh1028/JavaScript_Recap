class User {
    constructor(username){
        this.username=username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,  password, email){
        super(username);
        this.password=password;
        this.email=email;
    }

    addcourse(){
        console.log(`New Course is added by ${this.username}`);        
    }
}

let user1 = new Teacher("abc", "uy12", "abc@gmail.com");

console.log(user1.username);
user1.logMe(); 
console.log(user1 instanceof User);

let user2 = new User("masalaChai");
user2.logMe(); 

console.log(user1 === user2);

     
