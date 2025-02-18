/**
 * funcstion takes an array as a parameter
 * give me the avarage of the odd number in the array
 *  */

function oddAvarage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      // console.log(number)
      odds.push(number);
    }
  }

  let sum = 0;
  for (const number of odds) {
    sum += number;
  }

  return (avarage = sum / odds.length);
}

const numbers = [2, 4, 5, 3, 7, 9]; //you can change the array value 
const avg = oddAvarage(numbers);

console.log("average of the odd number is: ", avg);
