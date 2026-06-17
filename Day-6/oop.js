// old way

function createUser(name,age) {
    return {
        name:name,
        age:age,
        greet(){
            return `Hello i am ${name}`
        }
    }
}

console.log(createUser("sahin",24).greet());

// Modern way — Class দিয়ে

class User {
    constructor(name,age) {
        this.name= name;
        this.age= age;
    }
    greet(){
        return `Hello i am ${this.name}, my age ${this.age}`
    }
}

const user1= new User("sahin",24);
const user2= new User("mahin",27);

console.log(user1.greet());
console.log(user2.greet());