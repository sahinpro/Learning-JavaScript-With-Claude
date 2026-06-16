// Question 1
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // কত আসবে?
console.log(counter()); // কত আসবে?
console.log(counter()); // কত আসবে?
