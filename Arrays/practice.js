/*TITTLE: PRACTICE EXERCISES */

//NOTE: 1.
console.log(`practice arrays`);

const practiceArr1 = ['a', 'b', 'c'];
const practiceArr2 = ['b', 'c', 'a'];

console.log(practiceArr1.sort()); //['a', 'b', 'c'];
console.log(practiceArr2.sort()); //['a', 'b', 'c'];
console.log(practiceArr1.sort() === practiceArr1); //true
console.log(practiceArr2.sort() == practiceArr2); //true
console.log(practiceArr1.sort() === practiceArr2.sort()); //false

/*The array sort method sorts the original array and also returns a reference to that array.
The first equality test return true. This holds true for the second comparison as well: practiceArr2.sort() and
practiceArr2.sort() point to the same object in memory.

The third test, the sort order of practiceArr1.sort() and practiceArr2.sort() are the same; however, they still 
point to different objects in memory. The result is false for this reason.
*/

//NOTE: 2. What gets logged?

const mathArr = [x => x * 1, x => x * 2, x => x * 3, x => x * 4];

console.log(mathArr.reduce((acc, cur) => acc + cur(acc), 1)); //120

/*The initial value of the accumulator is 1 , 
  acc = 1
  cur = index 0 = x => x * 1;

  First iteration = 
  acc + cur(acc) =
   1  + 1*1 = 1
   2  + 2*2 = 6
   6  + 6*3 = 24
  24  + 24*4 = 120

*/

/*NOTE: 3. Spread and rename : What happens when we spread that array and change the firstName property on the 
0-index object.*/

const spreadArr1 = [{ firstName: 'James' }];
const spreadArr2 = [...spreadArr1];
spreadArr2[0].firstName = 'Jonah';

console.log(spreadArr1); //firstName: 'Jonah'

console.log(spreadArr1[0] === spreadArr2[0]); //true
/*Spread creates a shallow copy of the array, meaning the object contained in spreadArr2 is still pointing to the
same object in memory that the spreadArr1 object is pointing to. So, changing the firstName property of the object
in one array will be reflected by the object in the other array changing as well. */

//NOTE: COPY BY VALUE AND REFERENCE
const person = {
  name: 'Catalina',
  pet: {
    name: 'Lupita',
    age: 15,
  },
};

let { name: owner, pet } = person;
console.log(pet === person.pet); //true

owner = 'Moises';
pet.name = 'Isaac';
console.log(person.name); //Catalina
console.log(person.pet.name); //Isaac

/* Similar situation with destructuring , name is a primitive value and is a copy by value, but pet is a reference
copy  because is in nested object, which means in this case you have a shallow copy and you can modify the original 
person.pet object but you can not modify person.name*/

//NOTE: What gets logged in the following scenario??

const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
map(el => console.log(el)); // 1 2 3

/*['a','b','c'].map, When called, will call Array.prototype.map with a this value of ['a','b','c']. But when used 
as a reference, rather than called ['a','b','c'].map is simply a reference to Array.prototype.map.

Function.prototype.bind will bind the this of the function to the first parameter (in this case, that's [1,2,3]),
and invoking Array.prototype.map with such a this results in those items being irerated over and logged.
*/

//NOTE: These objects have the same properties and values, Which is created more efficiently?

const sameArr1 = [1, 2, 3];

const firstResult = sameArr1.reduce((acc, el, i) => ({ ...acc, [el]: i }), {});

const secondResult = {};
for (let i = 0; i < sameArr1.length; i++) {
  secondResult[sameArr1[i]] = i;
}

console.log(firstResult);
console.log(secondResult);

/*When secondResult is being set, the secondResult[sameArr1[i]] property is set to the current index on each 
iteration.When firstResult is being set, the spread syntax (...) will create a shallow copy of the accumulator
object(acc) on each iteration and additionally set the new property. This shallow copy is more expensive than not 
performing a shallow copy; firstResult requires the construction of 2 intermediate objects before the result 
is achieved, whereas secondResult does not construct any intermediate objects. Therefore, secondResult is being 
set more efficiently.  */

//NOTE: Consider the following mapping,What gets logged??

const myArr = ['a', 'b', 'c'];
const myMap = { a: 1, b: 2, c: 3 };

const result = myArr.map(letter => myMap[letter]);
console.log(result); //[1,2,3]

/*The map method will create a new array from an existing array by performing a specified transformation on each
array item. In this example, each letter is replaced by a corresponding object's value. */

//NOTE: Which of the following methods are valid ways to copy mainArray??

const mainArray = ['one', 'two', 'three', 'five', 'four'];

//1.
const a1 = mainArray;
//2.
const b1 = [...mainArray];
//3.
const c1 = [];
mainArray.forEach(item => {
  c1.push(item);
});

console.log(a1); //This is a new reference to the same array.
console.log(b1); //In order to copy all the values from an array, you'll need to iterate through the array
console.log(c1); //and copy each value over, which is what options B and C are doing.
/* 2 and 3 */

/*Keep in mind that methods B and C are making shallow copies, This works in the example because all the values 
are strings. If mainArray had objects nested within it, the objects wouldn't be cloned; rather,both the original 
array and the cloned array would be holding a reference to the same object, so a change to the object in on array 
would result in a change to the object in the other array.
Javascript passes by reference , not value. If you'd like to learn more about arrays and how to create shallow 
copies.
*/

//NOTE: What gets logged??

let first = [1, 2, 3];
let second = [1, 2, 3];
let third = '1,2,3';

console.log(first == third);
console.log(second == third);
console.log(first == second);

/*When comparing either first or second to third using the equality operator (==), the Javascript interpreter 
will attempt to use the array's built-in toString method to first convert the array to a string. For both first
and second, the first.toString() method returns '1,2,3'.This is strictly equal to third, so both first == third 
and second == third are true!!

Non-primitive values -that is, objects (including functions and arrays) are held by reference. When comparing two
objects both the equality (==) and identity (===) operators will simply check whether the referencces match (the
    underlying values are not considered). In this case, first and second are references to different objects in 
    memory, so first == second is false.
*/

//NOTE: Will the following function always return the greatest number in an array?

function greatestNumberInArray(arr) {
  let greatest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (greatest < arr[i]) {
      greatest = arr[i];
    }
  }
  return greatest;
}

console.log(greatestNumberInArray([-1, -2, -3, -4, -5, -8, -7, -10])); //0
console.log(greatestNumberInArray([1, 2, 3, 4, 5, 8, 7, 10])); //10
console.log(greatestNumberInArray([-1, 2, 3, 4, 5, 8, -7, -10])); //8

/*No,This function will work fine for arrays where at least one value is 0 or greater;  however, it will fail
if all numbers are below 0. This is because the greatest variable starts at 0 even if 0 is greater than all array
elements*/

//NOTE: Consider the following nested array. What will get logged?

const arrayFlat = [1, [2, [3, [4, [5, [6, [7], 8], 9], 10]]], 12];

const resultFlat = arrayFlat.flat(); //testing
const resultFlat0 = arrayFlat.flat(0); //testing
const resultFlat1 = arrayFlat.flat(1); //testing
const resultFlat2 = arrayFlat.flat(2); //testing
const resultFlat3 = arrayFlat.flat(3); //testing
const resultFlat4 = arrayFlat.flat(4); //testing
const resultFlat5 = arrayFlat.flat(5); //original question
const resultFlat6 = arrayFlat.flat(6); //testing

console.log(resultFlat); //[1,2, Array(2),12];//testing
console.log(resultFlat0); //[1, Array(2),12];//testing
console.log(resultFlat1); //[1,2,Array(2),12];//testing
console.log(resultFlat2); //[1,2,3,Array(3),10,12];//testing

console.log(resultFlat3); //[1,2,3,4,Array(3),10,12];//testing
console.log(resultFlat4); //[1,2,3,4,5,Array(3),9,10,12];//testing
console.log(resultFlat6); //[1,2,3,4,5,6,7,8,9,10,12];//testing
console.log(resultFlat5); //[1,2,3,4,5,6,Array(1),8,9,10,12]; //original answer

/*The Array#flat introduced in ES2019 will flatten an array up to the given depth level. If the depth is unknown,
Infinity can be passed. If no depth is provided, the default depth will be 1. Passing 0 will return the array
without modification.*/

/*NOTE: Consider the following two arrays and operations on them. What gets logged as a result of script 
execution.*/

const exampleArray = [5, 1, 3, 7, 25];
const arrayS = exampleArray;
console.log(arrayS.sort());

([5, 25].indexOf(exampleArray[1]) != -1 &&
  console.log(exampleArray.reverse())) ||
  (exampleArray[3] == 25 && console.log(exampleArray));
console.log(arrayS);

/*console.log(arrayS.sort()) // [1,25,3,5,7]
  console.log(exampleArray.reverse()) // [7,5,3,25,1] 
  console.log(exampleArray) // [7,5,3,25,1] 
  console.log(arrayS) // [7,5,3,25,1]

  arraS and exampleArray points to the same array in memory, arrayS.sort() modifies the original array which is 
  exampleArray. Both variables exampleArray and arrayS point to the same sorted array.

  sort() = When you use this function by default it converts elements to string and then sorts alphabetically based 
  on their ascii code, so the first result is = 1,25,3,5,7.

  exampleArray[1] is found in the array [5,25] = this is true , leading to the second part of the statement 
  (exampleArray.reverse()) = Also works in-place and modifies the original array,  so exampleArray the second result
  is = 7,5,3,25,1.

  console.log returns undefined and this is a falsy value , so the second half of the statement is now evaluated
  exampleArray[3] == 25 this is true , because index 3 is 25 in the reverseArray, and the third result is 7,5,25,1.

  In the last part, exampleArray is the same modified array and the fourth is 7,5,25,1.

*/

/*NOTE: Which option below is NOT correct to merge the arrays?? */

let mergeArray1 = [1, 2, 30];
let mergeArray2 = [4, 5, 6];

console.log(mergeArray1.concat(mergeArray2)); //[1,2,30,4,5,6] CORRECT WAY TO MERGE ARRAYS
console.log([...mergeArray1, ...mergeArray2]); //[1,2,30,4,5,6] CORRECT WAY TO MERGE ARRAYS
console.log(mergeArray1 + mergeArray2); // 1,2,304,5,6 ==> NOT CORRECT WAY TO MERGE ARRAYS

/*mergeArray1 + mergeArray2 = '1,2,304,5,6' = the + operator convert into a string both arrays and that's why 
the result is a string concatenated with other string  */

/*NOTE: Which of the following options uses the pop array method to remove the last item from myArray, assigning the
"popped off" value to removedFromMyArray??*/

let myPopArray = [
  ['JOE', 23],
  ['LOUIS', 2],
];

let removedFromMyArray = myPopArray.pop();
console.log(removedFromMyArray); // ["LOUIS",2]

/*
  let removedFromMyArray.pop()
  let removedFromMyArray = myPopArray.pop() ===> correct answer
  myPopArray.pop(removedFromMyArray)
  let removedFromMyArray.pop()
*/

/*NOTE: There is a rotten bean which looks different inside a basket. Which option below is the right way to 
create a new array containing only the rotten bean*/

let basketBeans = [0, 0, 0, 0, 9];

console.log(basketBeans.splice(4, 1)); //[9] ===> Correct Asnwer
console.log(basketBeans.slice(4, 1)); //[] ===> THe second parameter of the slice method must be the end index of the
//portion of the array you want to slice , It's not the number of elements you want to delete.

//NOTE: What will the value of citrus be in the below code??

let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits.slice(1, 3);
console.log(citrus); //['Orange','Lemon'];

/*Slice(start index , end index) but the end index will not be included in the result that's why Apple is out 
of the final result.*/

/*NOTE: Which of the following array methods is guaranteed to iterate through each element of an array 

1) forEach() ===> Correct Answer
2) every()
3) concat()

forEach() = calls a provided callback function once for each element in an array in ascending order. 
every() = will stop as soon as the provided function results in a falsey condition. 
concat() = simply combines two arrays.
*/

/*NOTE: True or False: array.findIndex will return 0 when no elements pass the test.

 True
 False ===> Correct Answer

 findIndex will actually return a -1 since 0 would be a legitimate array Index!!
 Under the hood ,this array method executes a callback function for each index until a truthy value is returned.
 If the array length is 0 or if the callback never returns a truthy value then findIndex will return -1.
*/

/*NOTE: Consider the following block of code. What gets logged?*/

let equalArray1 = [9];
let equalArray2 = [10];

console.log(equalArray1 == 9); //true
console.log(equalArray2 == 10); //true
console.log(equalArray1 < equalArray2); //false

/*When using == to compare an array with a number, Javascript tries to coerce the array to a number, which is 
possible when the array contains a single numeric value. Here [9] turns into 9, and [10] turns into 10, and 
9 == 9 and 10 == 10 are both true.

When comparing arrays with < or >, the arrays are instead coerced to strings ([9] < [10] turns into '9' < '10').
When comparing strings, Javascript uses lexicographical order, which means the strings are compared to each other 
one character at a time. The first characters that are different are the ones at the [0] index, so the comparison
donde is '9' < '1', which is false.
*/

/*NOTE: What gets logged in the following code?? */

let i = 0;

const numArr = new Array(5);
console.log(numArr); //[empty x 5] length: 5 __proto__: Array(0)
numArr.forEach(() => i++);

console.log(i); //0

/*Array methods like map, filter, reduce, forEach.. take a callback as the first parameter, which is executed 
for every element in the array . The Array constructor, when given an integer between 0 and (232 - 1), will 
return a sparse array, which has a length property equal to the given integer. THe returned array is "sparse" 
because its slots are empty; it does not have any own-properties, other than [.length].
(In contrast, the array [undefined] does have an own-property of 0, even though the value at that property is 
  undefined.)
*/

/*NOTE: What does the below function return?? */

function ArrayBoolean() {
  if ([] && [1]) return [true, true];
  else if ([] && ![1]) return [true, false];
  else if (![] && [1]) return [false, true];
  else return [false, false];
}

console.log(ArrayBoolean()); //[true, true]
console.log([] == false); //true

/*In JS , both [] empty and non empty arrays are truthy, like all objects. This is not the same thing as 
comparison.
If the arrays were loosely compared to a Boolean, the results would be different. 
[] == false would evaluate to true because the empty array, when converted into a primitive, is falsey.

The first if statement is fulfilled, so [true, true] is returned.
*/

/*NOTE: In the following example, we attempt to get part of our URL's domain name. What ends up being logge?*/

const url = 'quiz.typeofnan.dev';
const { length: ln, [ln - 1]: domain = 'quiz' } = url
  .split('.')
  .filter(Boolean);
console.log(domain); //dev

/* 
1) Assign = const url = 'quiz.typeofnan.dev';

2) url.split('.) Will split our url string by the . character resulting in the following array: 
['quiz','typeofnan','dev'].
Applying filter(Boolean) on this array is the same as filter(el => Boolean(el)). Since all of the elements are 
truthy, Boolean(el) will always be true, meaning we don't actually filter anything out.

3) Destructuring =  const {length: ln, [ln - 1] : domain = 'quiz } = ['quiz','typeofnan','dev'];

In this destructuring, we use aliasing to assign the array's length property to a variable we call ln. Next, we use
aliasing again to assign the ln - 1 element to the domain variable. The = 'quiz' is a default value, meaning 
domain will equal 'quiz' if there is no ln - 1 array element.

Applying this to our array, length which we assign to ln, is 3 ln - 1 is 2 and the item at index 2 of our array 
is dev. Therefore, the answer is dev!
*/

/*NOTE: IMPLICIT SEMICOLON BEHAVIOR = What does this snippet of code print? */

let array = [1, 2](array).push(3);

console.log(array); //ReferenceError

/*Javascript would normally add a semicolon after the let array line, however (array) is seen as calling a function
and JS actually reads let array = [1,2] (array).push(3).
There is a ReferenceError because the variable array is used inside its definition. If it used var instead, JS would
attempt to call [1,2] which is a TypeError.

Correct way : 

let arr = [1, 2];
arr.push(3);
console.log(arr);

*/

/*NOTE: ARRAY METHOD CALLBACKS : What gets logged in the following code? */

let i = 0;

const arr = new Array(5);
arr.forEach(() => i++);

console.log(i);

/*Array methods like map, filter, reduce, forEach, etc take a callback as the first parameter, which is executed 
 for every element in the array. The Array constructor, when given an integer between 0 and (232 - 1), will return 
 a sparse array, which has a length property equal to the given integer. The returned array is "sparse" because its
 slots are empty; it does not have any own-properties, other than .length. (In contrast, the array [undefined] does
 have an own-property of 0, even though the value at that property is undefined.) */

/*NOTE: Write a javascript function to clone an array. */

function cloneArr(arr) {
  return [...arr];
}

console.log(cloneArr([1, 2, 3, 4, 5]));

/*NOTE: Write a javascript function to clone an nested array. */

function clone_arr(arr) {
  let clone = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      clone.push(clone_arr(arr[i]));
    } else {
      clone.push(arr[i]);
    }
  }
  return clone;
}

console.log(clone_arr([1, 2, 3, [1]]));

/*NOTE: Convert an array to string*/

function arrayTostring(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + String(arr[i]);
  }
  return str;
}

console.log(arrayTostring(['M', 'i', 'n', 'n', 'i', 'e']));

/*NOTE: Function using JSON.stringify */

const obj = {
  name: 'Bob',
  citiesVisited: ['Seul', 'New York', 'Los Angeles'],
  pets: [{ name: 'Dog1' }, { name: 'Dog2' }, { name: 'Dog3' }],
};

console.log(obj);

// string representation of obj
const objString = JSON.stringify(obj);

console.log(objString);

//NOTE: SORT AN ARRAY

function sortArr(arr) {
  return arr.sort();
}

console.log(sortArr([3, 8, 7, 6, 5, -4, 3, 2, 1]));
