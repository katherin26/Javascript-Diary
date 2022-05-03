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

 /*Double the numbers */

 function maps(numbers){
     return numbers.map((value) => value * 2)
 }


 /*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.*/

function sum(numbers){
    let sum = 0;
    if(numbers.length === 0) return 0;
    for (let i = 0; i < numbers.length; i++){
      sum += numbers[i];
    }
    return sum;
  }
  
  console.log(sum([1,5.2,4,0,-1]))
  console.log(sum([]));
  
  
  /*Simple, remove the spaces from the string, the return the resultant string.*/
  
  function noSpace(x){
    let arrX = x.split(" ").join('')
    return arrX;
  }
  
  console.log(noSpace('a s d f e g t dd s s'));
  
  /*Can you find the needle in the haystack?
  
  Write a function findNeedle() that takes an array full of junk but containing one "needle"
  
  After your function finds the needle it should return a message (as a string) that says:
  
  "found the needle at position " plus the index it found the needle, so: */
  
  function findNeedle(haystack){
    for (let i = 0 ; i < haystack.length; i++){
      if(haystack[i] === "needle"){
        console.log(`Found the needle at position : `,i)
      }
    }
  }
  
  console.log(findNeedle(['moreJunk','needle']))
  
  /*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/
  
  function removeChar(word){
   let arrWord = word.split("");
    arrWord.shift();
    arrWord.pop();
    return arrWord.join('')
    
  }
  
  console.log(removeChar('eloquent'));
  
  
  /*Write a function which converts the input string to uppercase.*/
  
  function makeUpperCase(str){
    return str.toUpperCase();
  }
  
  console.log(makeUpperCase("hello"));
  
  
  function maps(numbers){
    return numbers.map((value) => value * 2)
  }
  
  console.log(maps([1,2,3]));


  Example : n=5 --> [5,4,3,2,1]*/

  const reverseSeq = n => {
    let newList = [];
    for(let i = n ; i >= 1 ; i--){
      newList.push(i)
    }
    return newList; 
  }
  
  /*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
  
  Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
  
  If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
  If he doesn't get 10 hoops, return the string "Keep at it until you get it".*/
  
  function hoopCount (n) {
      if(n >= 10){
        return `Great, now move on to tricks`
      }else{
        return `Keep at it until you get it`
      }
  }
  
  /*There was a test in your class and you passed it. Congratulations!
  But you're an ambitious person. You want to know if you're better than the average student in your class.
  
  You receive an array with your peers' test scores. Now calculate the average and compare your score!
  
  Return True if you're better, else False!
  
  Note:
  Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!*/
  
  function betterThanAverage(classPoints, yourPoints){
    let scores = classPoints;
    scores.push(yourPoints);
    let average = scores.reduce((a,b) => a + b) / scores.length;
    if( average < yourPoints){
      return true;
    }else{
      return false;
    }
  }
  
  console.log(betterThanAverage([2,3],5));
  console.log(betterThanAverage([2,3],8));
  console.log(betterThanAverage([2,3],2));
  console.log(betterThanAverage([2,3],7));