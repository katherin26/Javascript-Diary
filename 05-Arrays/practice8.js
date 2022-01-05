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
