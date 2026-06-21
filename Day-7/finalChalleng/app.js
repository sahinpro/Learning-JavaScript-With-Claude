import { validateAge } from "./validator.js";
function registerUser(name, age) {
    try {
        validateAge(age); // এখানে যদি error হয়, এটা throw করবে
        return `User registered: ${name}`;
    } catch (error) {
        return `Failed: ${error.message}`;
    }
};

console.log(registerUser("Sahin", 25));
console.log(registerUser("Karim", 15));
