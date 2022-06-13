/*Frecuency Counter*/
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
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
