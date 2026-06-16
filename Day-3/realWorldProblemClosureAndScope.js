// একটা shopping cart system বানাও
// Closure + Scope দিয়ে

function createCart() {
  let items = []; // বাইরে থেকে directly access নেই
  return {
    addItem(name, price) {
      return items.push({ 
        name: name ,
        price:price
      }); // items array তে { name, price } push করো 
     
    },
    removeItem(name) {
         items= items.filter((item)=>item.name!==name);
         return items;
    },
    getTotal() {
        const totalPrice = items.reduce((total, item) => {
          return total + item.price;
        },0);
        return totalPrice;
    },
    getItems() {
      return items;
    },
  };
}

const cart = createCart();
cart.addItem("shirt",500)
cart.addItem('shoe',200);
cart.addItem("bag", 650);
console.log(cart.getItems());
cart.removeItem('shirt');
console.log(cart.getItems());
console.log("Total Price", cart.getTotal());
