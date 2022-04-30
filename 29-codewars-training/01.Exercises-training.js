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

/*Write a function which calculates the average of the numbers in a given list.*/

let list = [1,2,3,4,5,6];

function find_average(arr){
    let sum = 0;
    for(const value of arr){
      sum += value
    }
    return sum/ arr.length;
  }

/*You will be given an array a and a value x. All you need to do is check whether the 
provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.*/

let arr = [66,101];
let arr2 = [101,45,75,105,99,107];

function check(a,x){
    for(let i = 0 ; i < a.length; i++){
        if(a[i] === x) return "true";
        else "false";
    }
}