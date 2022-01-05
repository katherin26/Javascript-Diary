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
