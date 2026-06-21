// একটা registerUser function

function registerUser(name, age, email) {
  try {
    if (typeof name !== "string" || name === "") {
        throw new Error("Name must be a string and it cannot be empty");
    }
    if (typeof age !== "number") {
        throw new Error("Name must be a Number and cannot be empty");
    }
    if (age < 18) {
      throw new Error("Age cannot be less then 18");
    }
    if(typeof email !== "string"){
        throw new Error("Email is not valid");
        
    }
    if( email.includes("@") !== true){
        throw new Error("Email is not valid it must contain @");
        
    }
    return `User registared: ${name}`

  } catch (error) {
    return `User Registration failed: ${error.message}`;
  }
}

// Test
console.log(registerUser("Sahin", 25, "sahin@gmail.com")); // সফল
console.log(registerUser("", 25, "sahin@gmail.com")); // name error
console.log(registerUser("Karim", 15, "karim@gmail.com")); // age error
console.log(registerUser("Rahim", 30, "rahimgmail.com")); // email error
