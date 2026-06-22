const a = [1, 2, 2, 2, 3];
const b = [2];

const result = [];

for(let i = 0; i < a.length; i++) {

if(!b.includes(a[i])){
    result.push(a[i]);
}
}

console.log(result); // [1, 3] আসা উচিত