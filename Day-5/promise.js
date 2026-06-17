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

/**
 * Async/Await
 */

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({
          id: id,
          name: "sahin",
          email: "sahinweb@proton.me",
          city: "Sunamganj",
        });
      } else {
        reject("Invalid User ID");
      }
    }, 2000);
  });
}

fetchUser(1)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => console.error(error));

// Realworld example

const userID = 9;
fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
  .then((response) => {
    console.log("waiting for data");
    if (response.ok) {
      return response.json();
    } else {
      return console.log("Nah! Data Faichi na", "User ID is Invaild");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));