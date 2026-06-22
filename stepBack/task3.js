const numbers = [3, 8, 15, 22, 6, 19, 4];

const result = [];

for (let i = 0; i < numbers.length; i++) {
  if(numbers[i]>5 && numbers[i]<20){
    result.push(numbers[i]);
  }
}

console.log(result); 