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

/*NOTE: Log the module % 2  */

for (let i = 0; i <= 20; i++) if (i % 2 === 0) console.log(i);
//0,2,4,6,8,10,12,14,16,18,20

/*NOTE: Loops in Arrays */

let score = [7, 4, 3, 4, 5, 6, 4, 4, 6, 7];
sum = 0;
average = 0;

for (let i = 0; i < average.length; i++) {
  sum = sum + average[i];
}

average = sum / average.length;
console.log(average); //5

/*NOTE: CONCATENATION */

let i = 10;

i += 2;
console.log(i); //12

/*NOTE: FOR LOOP WITH (i+=10) */

let number = 50;

for (let i = 10; i <= number; i += 10) console.log(i); //10 20 30 40 50

//NOTE: USE ANY DATA TYPE RETURN ANY DATA TYPE SHORT-CIRCUITING

//OR

console.log(3 || 'Jonas'); //3 (truty)
console.log('' || 'Jonas'); //Jonas
console.log(true || 0); //true (truty);
console.log(undefined || null); //both are falsy
