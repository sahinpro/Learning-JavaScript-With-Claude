// একটা bank account বানাও
// যেখানে balance বাইরে থেকে directly
// change করা যাবে না
// শুধু deposit আর withdraw দিয়ে করা যাবে

function createAccount(initialBalance) {

    let balance = initialBalance ; // এখানে balance variable থাকবে
  // কিন্তু বাইরে থেকে access করা যাবে না
  return {
    deposit(amount){
        return balance = amount + balance;
    },
    withdraw(amount){
        return balance = balance - amount
    },
    getBalance(amount){
        return balance
    }
  }
  // return করবে একটা object যেখানে থাকবে:
  // deposit(amount)  → balance বাড়াবে
  // withdraw(amount) → balance কমাবে
  // getBalance()     → current balance দেখাবে
}

const myAccount = createAccount(1000);
myAccount.deposit(500); // balance = 1500
myAccount.withdraw(200); // balance = 1300
console.log(myAccount.getBalance()); // 1300

// এটা কাজ করবে না — বাইরে থেকে access নেই
console.log(myAccount.balance); // undefined ✅
