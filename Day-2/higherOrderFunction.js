// এটা একটা normal function
function greet(name) {
  return "hello " + name;
}

// এটা একটা Higher Order Function
function doSomething(fn, value) {
    console.log(fn,value);
  return fn(value);
}

console.log(doSomething(greet, "Sahin"))


// একটা Higher Order Function বানাও — calculate()
// যেটা দুটো parameter নেবে:
// 1. একটা number
// 2. একটা function

function double(num) {
    return num*2;
 }   // number কে দ্বিগুণ করবে


function square(num) { 
    return num * num;
 }   // number এর বর্গ করবে


function addTen(num) { 
    return num+10;
 }   // number এর সাথে 10 যোগ করবে


function calculate(number,fn){
    return fn(number);
}


// এভাবে call করলে কাজ করবে:
calculate(5, double);   // 10
calculate(5, square);   // 25
calculate(5, addTen);   // 15