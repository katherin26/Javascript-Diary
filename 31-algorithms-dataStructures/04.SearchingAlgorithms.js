//SEARCHING ALGORITHMS

//LINEAR SEARCH

/*Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.*/

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log(linearSearch([100], 100));
console.log(linearSearch([1, 2, 3, 4, 5], 6));

//NOTE: O(n) ==> linear

//BINARY SEARCH

function binarySearch(sortedArray, needle) {
  if (!sortedArray.length) return -1;
  if (needle < sortedArray[0]) return -1;
  if (needle > sortedArray[sortedArray.length - 1]) return -1;

  let start = 0; //position 0
  let end = sortedArray.length - 1; // position 9
  let middle = Math.ceil((end + start) / 2);
  //         = 0 + 9 = 9
  //         = 9 / 2 = 4.5
  //         = Math.ceil(4.5) = position 5

  //[1,2,3,4,5,6,7,8,9,10]
  // 0       5          9

  while (start < end) {
    if (sortedArray[middle] === needle) return middle;
    if (sortedArray[start] === needle) return start;
    if (sortedArray[end] === needle) return end;

    if (needle > sortedArray[middle]) {
      start = middle + 1;
    } else if (needle < sortedArray[middle]) {
      end = middle - 1;
    }

    middle = Math.ceil((end + start) / 2);
  }

  return -1;
}

/*Searching for 8
    while(0 < 8){
      if(6 === num)
      if(1 === num)
      if(10 === num)
  
  if(8 > 6)
    start (6) = 5 + 1; ==> start position 6.
  if(8 < 6)
  
   6   8  9
  [7,8,9,10]
  
  middle = 6 + 9 = 15 / 2 
         = Math.ceil(7.5) = position 8
  if(8 > 9)
  if(8 < 9)
    7 = 8 - 1  ===> end position is now 7.
  
  middle = 6 + 7 = 13 / 2 ===> position 7 middle.
  
  sortedArray[middle] === needle
  8 = 8  ==>  Return 8;
  
  */

/*NOTE: NAIVE STRING SEARCH EXERCISE*/

/*
1. Loop over the longer string.
2. Loop over the shorter string.
3. If the characters don't match, break out of the inner loop.
4. If the characters do match, keep going.
5. If you complete the inner loop and find a match, increment the count of matches.
6. Return the count.
*/
