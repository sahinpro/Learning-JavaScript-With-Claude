

const numbers = [5, 12, 8, 30, 7];

const result = [];

for (let i = 0; i < numbers.length; i++) {
  numbers[i]>10&&result.push(numbers[i]);
}

console.log(result); // [12, 30] আসা উচিত



