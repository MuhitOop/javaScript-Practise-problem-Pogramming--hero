const products = [
  { name: "Laptop", price: 1200, quantity: 5 },
  { name: "Mouse", price: 25, quantity: 20 },
  { name: "Keyboard", price: 80, quantity: 10 },
  { name: "Headphones", price: 150, quantity: 8 },
  { name: "Monitor", price: 300, quantity: 3 }
];

function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        total += product.price * product.quantity;
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);