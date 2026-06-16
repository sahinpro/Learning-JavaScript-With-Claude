// একটা food delivery app
// order দিলে কী কী ঘটে সেটা simulate করো

function orderFood(item) {
  console.log(`Order placed: ${item}`);

  setTimeout(() => {
    console.log(`Kitchen received: ${item}`);
  }, 2000);

  setTimeout(() => {
    console.log(`${item} is ready!`);
  }, 5000);

  console.log("Waiting for your order...");
}

orderFood("Biryani");

// challenge
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

/**
 *
A → synchronous, stack এ আগে
D → synchronous, stack এ পরে
C → Microtask Queue (Promise) — stack খালি হলে আগে
B → Callback Queue (setTimeout) — Microtask এর পরে
 */