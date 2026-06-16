const products = [
  { name: "shirt", price: 500, inStock: true },
  { name: "pant", price: 800, inStock: false },
  { name: "shoe", price: 1200, inStock: true },
  { name: "bag", price: 650, inStock: true },
  { name: "hat", price: 300, inStock: false },
];

// Step 1 → filter()  — inStock: true গুলো বের করো
// Step 2 → map()     — 10% discount দাও
// Step 3 → reduce()  — মোট দাম বের করো


const curentStockProducts = products.filter((product) => product.inStock && product.name);
console.log('bortomane stocke ache: ',curentStockProducts);

// 10% discount mane
const discountAmount=0.1;
const discountedProducts = curentStockProducts.map((product) => ({
  name: product.name,
  originalPrice:product.price,
  discountedPrice: product.price-(discountAmount*product.price),
}));

console.log('discount dewr porer product and price: ',discountedProducts);

const totalPrice = discountedProducts.reduce((total,product)=>{
    return total + product.discountedPrice;
},0);
console.log('sorbomot price after the discount: ',totalPrice);