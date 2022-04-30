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

/* Square Sum*/

function squareSum(numbers){
    return numbers.reduce((previousValue, currentValue) => (currentValue *currentValue) + previousValue)
}

/*Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any numbers then 
you should return 0.*/

function sum(numbers){
    let sum = 0;
    if(numbers.length === 0) return 0;
    for (let i = 0 ; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum;

}

/*Simple, remove the spaces from the string, the return the resultant string.*/

function noSpace(x){
    let arrX = x.split(" ").join('');
    return arrX;
}

console.log(noSpace('a s d f e g t dd s s'));

/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so: */

function findWord(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "needle"){
            console.log(`Found the needle at position.`, i)
        }
    }
}

console.log(findNeedle(['moreJunk','needle']))


/*It's pretty straightforward. Your goal is to create a function that removes the first
 and last characters of a string. You're given one parameter, the original string. 
 You don't have to worry with strings with less than two characters.*/

 function removeChar(word){
     let arrWord = word.split("");
     arrWord.shift();
     arrWord.pop();
     return arrWord.join('');
 }


 /*Write a function which converts the input string to uppercase.*/

 function makeUpperCase(str){
     return str.toUpperCase();
 }

 