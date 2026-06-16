// একটা e-commerce site এ বিভিন্ন ধরনের
// discount apply করতে হবে

const products = [
  { name: "shirt", price: 500 },
  { name: "shoe", price: 1200 },
  { name: "bag", price: 650 },
];

// এই discount function
const ramadanDiscountAmount = 0.2;
const vipDiscountAmount = 0.35;
const clearanceDiscountAmount = 0.5;

function ramadanDiscount(price) {
  return price - ramadanDiscountAmount * price;
} // 20% ছাড়

function vipDiscount(price) {
  return price - vipDiscountAmount * price;
} // 35% ছাড়

function clearanceDiscount(price) {
  return price - clearanceDiscountAmount * price;
} // 50% ছাড়

/**
 * 
 * @param {// এই function টা বানাও:
function applyDiscountToAll(products, discountFn) {
  // সব products এ discountFn apply করো
  // নতুন array return করো — name আর discountedPrice সহ
  return products.map((product) => ({
    name: product.name,
    discountedPrice: discountFn(product.price),
  }));
}

console.log(applyDiscountToAll(products, ramadanDiscount));
console.log(applyDiscountToAll(products, vipDiscount));
console.log(applyDiscountToAll(products, clearanceDiscount));
} discountRate 
 * @returns 
 */
// Discount create korar function
function createDiscount(discountRate) {
  return function (price) {
    return price - discountRate * price;
  };
}
  
const summerSale = createDiscount(0.25);    // 25% ছাড়
const flashSale = createDiscount(0.6);     // 60% ছাড়
const loyaltyDiscount = createDiscount(0.1); // 10% ছাড়

// তারপর applyDiscountToAll
console.log(applyDiscountToAll(products, summerSale));
console.log(applyDiscountToAll(products, flashSale));
console.log(applyDiscountToAll(products, loyaltyDiscount))

