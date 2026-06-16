console.log("1. কাজ শুরু");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3. Promise সফল!");
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});

console.log("2. অন্য কাজ চলছে...");
