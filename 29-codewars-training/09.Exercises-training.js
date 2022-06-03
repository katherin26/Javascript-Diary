/*Write a function that returns the total surface the total surface area and volume of a box as an array: [area,volume]*/

function getSize(width, height, depth) {
  let volume = width * height * depth;

  let area = 2 * (depth * width + depth * height + width * height);

  return [area, volume];
}

console.log(getSize(4, 2, 6));

/*Give you a function animal, accept 1 paremeter:obj like this: 
  {name:"dog",legs:4,color:'white'}
  and return a string like this : 
  
  "This white dog has 4 legs."
  */

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

console.log(animal({ name: 'dog', legs: 4, color: 'white' }));

/*What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
  
  Example: 
  
  "apple ban" ==> ['apple 5', 'ban 3']
  
  You task is to write a function that takes a string and returns an array/list with the length of each word added to each element. 
  */

function addLength(str) {
  let arr = str.split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`${arr[i]} ${arr[i].length}`);
  }
  return newArr;
}

console.log(addLength('you will win'));

/*Find the mean (average) of a list of numbers in an array.
 */

function findAverage(nums) {
  let sum = nums.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  return sum / nums.length;
}

console.log(findAverage([1, 3, 5, 7]));

/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
  
  x < 5
  x > 5
  */

function fakeBin(x) {
  let arr = x.split('');
  let newArr = [];
  for (let value of arr) {
    if (value >= `5`) {
      newArr.push('1');
    } else {
      newArr.push('0');
    }
  }
  return newArr.join('');
}

console.log(fakeBin(`4554`));
