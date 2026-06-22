
const names = ["Sahin", "Karim", "Rahim", "Joy", "Tamim"];

const result = [];

for (let i = 0; i < names.length; i++) {
    if(names[i].length>4){
        result.push(names[i]);
    }
    console.log(names[i]);
}

console.log(result); // ["Sahin", "Karim", "Rahim", "Tamim"] আসা উচিত
