/**
 * filter array method
 */

// Problem 1
const ages = [15, 22, 17, 30, 13, 25];
// filter() দিয়ে শুধু ১৮ বা তার বেশি বয়সের
// numbers বের করো
// Expected: [22, 30, 25]

const expectedAges = ages.filter((i) => i >= 18);
console.log(expectedAges);

// Problem 2
const words = ["apple", "banana", "kiwi", "mango", "fig"];
// filter() দিয়ে শুধু সেই words বের করো
// যেগুলোর length 5 এর বেশি
// Expected: ["banana", "mango"]

const expectedWords = words.filter((word) => word.length > 5);
console.log(expectedWords);
