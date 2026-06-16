// Problem 1 — Easy
const numbers = [10, 25, 8, 42, 15, 3];
// reduce() দিয়ে সব numbers এর যোগফল বের করো
// Expected: 103


const totalOfNumbers = numbers.reduce((total, number)=>{
return total+number;
},0);
console.log("total of numbers= ", totalOfNumbers);

// Problem 2 — Medium
const students = [45, 82, 67, 91, 38, 74];
// reduce() দিয়ে সবচেয়ে বড় marks বের করো
// Expected: 91

const highestMark=students.reduce((intialMark,currentMark)=>{
if(currentMark>intialMark){
    return currentMark;
}else{
    return intialMark;
}
},0)

console.log("highest mark = ", highestMark);


// Problem 3 — Think harder 🧠
const cart = [
  { name: "shirt", price: 500 },
  { name: "pant", price: 800 },
  { name: "shoe", price: 1200 },
  { name: "bag", price: 650 },
];
// reduce() দিয়ে cart এর মোট দাম বের করো
// Expected: 3150
const cartItemsPriceArray=cart.map(i=>i.price);
const totalCartPrice=cartItemsPriceArray.reduce((intialPrice,currentPrice)=>intialPrice+currentPrice)
console.log('cart total= ', totalCartPrice)