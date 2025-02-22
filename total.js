const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 75 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 350 },
  { name: "Webcam", price: 100 }
];

function totalPrice(prc) {
    let sum = null;
    for (const product of prc) {
        sum += product.price;
    }

    return sum;
}
const total = totalPrice(products);
console.log(total)