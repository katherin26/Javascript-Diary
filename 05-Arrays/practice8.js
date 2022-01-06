//NOTE: Using sort() method.

/*Explanation : The while loop through a block of code as long as a specified condition is true.
In this case the condition is arr.length.
smallestIndex start in null, but when we execute the for loop we have the if statement (if smallestIndex is equal to null) asign the i to smallestIndex ,  else if (the arr in position [i] minor to arr[smallestIndex] asign i to smallestIndex  ), then we push the arr[smallestIndex] and in the next line we remove with splice that value from the existing array.

 */

function sortArr(arr) {
  let arrSorted = [];

  while (arr.length) {
    let smallestIndex = null;
    for (let i = 0; i < arr.length; i++) {
      if (smallestIndex === null) {
        //inicializar
        smallestIndex = i;
      } else if (arr[i] < arr[smallestIndex]) {
        smallestIndex = i;
      }
    }
    arrSorted.push(arr[smallestIndex]);
    //Remueve uno a partir de ese index.
    arr.splice(smallestIndex, 1);
  }
  return arrSorted;
}

console.log(sortArr([3, 8, 7, 6, 5, -4, 3, 2, 1]));

console.log(sortArr([30, 80, 7, 15, 5, -1, 3, 2, 1]));

console.log(sortArr([30, 8, 71, 60, 50, -2, 3, 2, 1]));

/*NOTE: Declare and initialize an array called Planets with 5 string values and print the values and the index. */

let planets = ['Mercury', 'venus', 'Mars', 'Uranus', 'Saturn'];

function printValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

printValue(planets);

/*NOTE: Loop over the 2 arrays and if there are any common courses print them. */

let studentCourse1 = ['Math', 'English', 'Programming', 'Spanish'];
let studentCourse2 = ['Geography', 'Spanish', 'Programming'];

/*First : We iterate over the studentCourse1 and used the indexOf() method and this one return the first index at which a given element can be found in the array , or -1 if it is not present. , the second parameter is the start index in this case 0. That's why we used studentCourse[i],[0] 
Then using if statement we write if the result is diferent from -1 print the studentCourse1[i];
*/

for (let i = 0; i < studentCourse1.length; i++) {
  let result = studentCourse2.indexOf(studentCourse1[i], 0);

  if (result !== -1) console.log(studentCourse1[i]);
}

/*NOTE: Create a function that receives an array of numbers and returns an array containing only the positive numbers. */

let numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

/*We cretate a function with the name positiveNum and we pass arr like parameter, Inside the function, we create an empty let variable called positives and this variable is gonna store the final result from the loop.
The For Loop iterates over the array and with an if statement compares if the current index values is equal or bigger than 0 , if is true push the value to positives.
 */
function positiveNum(arr) {
  let positives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positives.push(arr[i]);
    }
  }
  return positives;
}

console.log(positiveNum(numbers)); //[ 10, 12, 5, 90, 0, 1 ]

//NOTE: Using filter method , Filter the numbers bigger than 0.

let unfilteredArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

const filteredArr = unfilteredArr.filter(el => el >= 0);
console.log(filteredArr); //[ 10, 12, 5, 90, 0, 1 ]

//NOTE: Create a function called findMax and this function it should return the maximun value inside an array.

let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let maxResult = findMax(arr);
console.log(`Max: ${maxResult}`); //Max: 90

//  NOTE: Create a function called calcAvg and sum all the numbers inside an array and inside that function used the total sum and return the average of each listArr.

let listArr1 = [1, 2, 3, 4, 5, 6, 7];
let listArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let listArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14];

function calcAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.ceil(sum / arr.length);
}

let result1 = calcAvg(listArr1);
let result2 = calcAvg(listArr2);
let result3 = calcAvg(listArr3);

console.log(`The result is "${result1}"`); //4
console.log(`The result is "${result2}"`); //6
console.log(`The result is "${result3}"`); //7
