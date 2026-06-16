// এই code এর output কী হবে?
// run করার আগে নিজে বলো

const city = "Dhaka";

function showCity() {
  const area = "Sunamganj";

  function showArea() {
    const street = "Main Road";
    console.log(city); // Dhaka
    console.log(area); // Sunamganj
    console.log(street); // Main road
  }

  showArea();
  console.log(city); // Dhaka
  console.log(area); // Sunamganj
  console.log(street); // no access
}

showCity();
console.log(city); // Dhaka
console.log(area); // no access
