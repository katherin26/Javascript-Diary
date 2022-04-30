/*Complete the method that takes a boolean value and return a "Yes" string for true, 
or a "No" string for false.*/

function boolToWord(bool) {
  return bool ? true ? "yes" : "No";
}


/*Write a function that takes an array of words and smashes them together into a sentence
 and returns the sentence. You can ignore any need to sanitize words or add punctuation, 
 but you should add spaces between each word. Be careful, there shouldn't be a space at the
  beginning or the end of the sentence!*/


  const words = ["hello","world","this","is","great"]

  function arr(arr){
      return  arr.join(' ');
  }

  /*Code as fast as you can! You need to double the integer and return it.*/

  function doubleInteger(i){
      return i * 2;
  }