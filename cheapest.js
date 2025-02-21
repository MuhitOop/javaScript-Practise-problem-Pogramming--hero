const phones = [
  {
    name: "Samsung",
    price: 20000,
    camera: "12mp",
    color: "black"
  },
  {
    name: "Xiaomi",
    price: 18000,
    camera: "14mp",
    color: "blue"
  },
  {
    name: "Apple",
    price: 120000,
    camera: "48mp",
    color: "Plateniam"
  },
  {
    name: "Oppo",
    price: 25000,
    camera: "18mp",
    color: "White"
  },
  {
    name: "Iqoo",
    price: 30000,
    camera: "32mp",
    color: "Orange"
  },
  {
    name: "Vivo",
    price: 35000,
    camera: "16mp",
    color: "Pink"
  }
];

function getCheapestPhone(phn) {
    let min = null;
    for (const phone of phn) {
        if (min === null || phone.price < min.price) {
            min = phone;
        }
    }
    
    return min;
}

const cheapest = getCheapestPhone(phones);

console.log('Cheapest Phone is: ',cheapest);
