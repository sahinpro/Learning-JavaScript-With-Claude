/**
 * array map() method
 */

// Problem 1
const names = ["rahim", "karim", "jamal"];
// map() দিয়ে সব নাম UPPERCASE করো
// Expected: ["RAHIM", "KARIM", "JAMAL"]

const nameUpp = names.map(i=>i.toUpperCase());

console.log(nameUpp);




// Problem 2
const prices1 = [100, 200, 300, 400];
// map() দিয়ে প্রতিটা price-এ 10% tax যোগ করো
// Expected: [110, 220, 330, 440]

const percentage=prices.map((price)=>{
const expPrice=price + (10 / 100) * price;
return parseInt(expPrice);
});
console.log(percentage)