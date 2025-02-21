const prices = [
  20000, 10000, 25000, 30000, 35000, 40000, 45000, 50000, 100000, 150000
];

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

const cheap = getMin(prices);
console.log("cheapest one is: ", cheap);
