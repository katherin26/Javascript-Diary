/*Frecuency Counter*/

/*SAME FUNCTION
  Write a function called same, which accepts two arrays. The function should return true 
  if every value in the array has it's corresponding value squared in the second array.
  The frequency of values must be the same.
*/

function same(arr1, arr2) {
  let firstCount = {};
  let secondCount = {};

  for (let i = 0; i < arr1.length; i++) {
    if (firstCount[arr1[i]]) {
      firstCount[arr1[i]]++;
    } else {
      firstCount[arr1[i]] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (secondCount[arr2[i]]) {
      secondCount[arr2[i]]++;
    } else {
      secondCount[arr2[i]] = 1;
    }
  }

  for (let property in firstCount) {
    if (firstCount[property] !== secondCount[Math.pow(property)]) {
      return false;
    }
  }
  return true;
}

/*Given two strings, write a function to determine if the second string is an anagram 
of the first. An anagram is a word, phrase, or name formed by rearranging the letters of 
another, such as cinema, formed from iceman.*/

function countLetters(str1, str2) {
  if (str1.length !== str2.length) return false;
  let firstStr = {};
  let secondStr = {};

  let arrString1 = str1.split('');
  let arrString2 = str2.split('');

  for (let i = 0; i < arrString1.length; i++) {
    if (firstStr[arrString1[i]]) {
      firstStr[arrString1[i]]++;
    } else {
      firstStr[arrString1[i]] = 1;
    }
  }

  for (let i = 0; i < arrString2.length; i++) {
    if (secondStr[arrString2[i]]) {
      secondStr[arrString2[i]]++;
    } else {
      secondStr[arrString2[i]] = 1;
    }
  }

  for (let firstProperty in firstStr) {
    if (firstStr[firstProperty] !== secondStr[firstProperty]) {
      return false;
    }
  }
  return true;
}

console.log(countLetters('ada', 'ada'));

/*Multiple pointers */
//NOTE: Finf two number that the sum = 0

function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;
  let sum = 0;

  while (start < end) {
    sum = arr[start] + arr[end];

    if (sum > 0) {
      end--;
    } else if (sum < 0) {
      start++;
    } else {
      return [arr[start], arr[end]];
    }
  }
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2]));

/*Multiple pointers = count Unique Values */

function countUniqueValues(arr) {
  if (arr.length === []) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

/*Write a function called sameFrecuency. Given two positive integers, find out if the two numbers have the same frecuency of digits. 

You solution must have the following complexities: 
Time : O(N);
*/

function sameFrecuency(n1, n2) {
  let str1 = n1.toString();
  let str2 = n2.toString();
  let count1 = {};
  let count2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (count1[str1[i]]) {
      count1[str1[i]]++;
    } else {
      count1[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (count2[str2[i]]) {
      count2[str2[i]]++;
    } else {
      count2[str2[i]] = 1;
    }
  }

  for (let property in count1) {
    if (count1[property] !== count2[property]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrecuency('182', '821'));

/*Multiple Pointers = areThereDuplicates */

function areThereDuplicates(...arg) {
  let arr = [...arg];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  for (let property in obj) {
    if (obj[property] >= 2) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 2));

/*multipe pointers ===== ordenamiento */
function areDuplicates(...arg) {
  let arr = [...arg];
  arr.sort();
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}

console.log(areDuplicates(1, 2, 3, 2));

/*Multiple Pointers = average pair */

function averagePair(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let average = 0;

  while (start < end) {
    average = arr[start] + arr[end] / 2;

    if (target < average) {
      end--;
    } else if (target > average) {
      start++;
    } else {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello'));

function isSubsequence2(str1, str2) {
  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
  }
  return false;
}

console.log(isSubsequence2('hello', 'hello'));

//Sliding window

/*Given an array of integers and a number, write a function called maxSubarraySumm which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that subarray must consist of consecutive elements from the original array. In the first example below, [100,200,300] is a subarray of the original array, but [100,300] is not.
*/

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  //sum for first iteration
  //index = 0 1   = 300
  //index = tempSum - [2 - 2] + 2
  //           300 - 100 + 300 = 500
  //index = tempSum - [3 - 2] + 3
  //           500 - 200 + 400 = 700

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
