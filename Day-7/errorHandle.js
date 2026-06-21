try {
  // যেই code এ error হতে পারে
  const result = 10 / 0;
  console.log(result); // Infinity — error না আসলে এটা চলবে
} catch (error) {
  // error হলে এখানে আসবে
  console.log("কিছু ভুল হয়েছে:", error.message);
}

/**
 * Real example
 */

try {
  const user = JSON.parse("invalid json"); // এটা error দেবে
  console.log(user);
} catch (error) {
  console.log("JSON parse করতে সমস্যা হয়েছে");
  console.log(error.message); // আসল error message
}

try {
  console.log("কাজ শুরু");
  throw new Error("কিছু একটা সমস্যা!");
} catch (error) {
  console.log("ধরা পড়েছে:", error.message);
} finally {
  console.log("এটা সবসময় চলবে, error থাকুক বা না থাকুক");
}


