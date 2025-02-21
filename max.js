const entries = [23, 45, 65, 34, 64, 3, 54, 26, 98];

function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

const max = getMax(entries);
console.log(max);
