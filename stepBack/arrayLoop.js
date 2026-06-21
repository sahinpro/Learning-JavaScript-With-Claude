

const numbers = [5, 12, 8, 30, 7];

const result = [];

for (let i = 0; i < numbers.length; i++) {
  numbers[i]>10&&result.push(numbers[i]);
}

// console.log(result); // [12, 30] আসা উচিত



// একটা array দেওয়া আছে নামের
const names = ["Sahin", "Karim", "Rahim", "Joy", "Tamim"];

// for loop ব্যবহার করে — যেই নামের length 4 এর বেশি
// সেগুলো একটা নতুন array তে রাখো

const result = [];

for(let i = 0; i < names.length; i++) {
   console.log(i)
}

// console.log(result); // ["Sahin", "Karim", "Rahim", "Tamim"] আসা উচিত