class Person {
 
    // let firstName;     in class we no need to give let, var and const keyword
    // let age;
    firstName = "John";
    lastName = "Dave";




    getDetails(){
        console.log(this.firstName);
        console.log(this.lastName);
    };


    

}

let p = new Person();
console.log(p.getDetails());