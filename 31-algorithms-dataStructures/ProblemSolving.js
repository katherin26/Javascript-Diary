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
