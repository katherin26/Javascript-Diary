/*NOTE: Convert the num value to a string value and log to the console 
the result with dash symbol between the number(78-656-2-4998)*/

let num = 786999443322;
let str = num.toString();
let result = [str[0]];

for (let x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}

console.log(result.join(''));

//NOTE: Using a For Loop get the max value

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function getMax(arr) {
  if (arr.length === 0) return undefined;

  let max = arr[0];

  for (let i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i];

  return max;
}

const max = getMax(numbers);
console.log(max);

/*NOTE: FOR LOOPS */

let fridge = ['tomato1', 'tomato2', 'tomato3', 'tomato4', 'tomato5'];

for (let i = 0; i <= fridge.length; i++) console.log(fridge[i]);
