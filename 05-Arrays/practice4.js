/*NOTE:  What is the longest name??*/

let persons = ['kaoru', 'kei', 'kii', 'kou', 'kuo'];

function getLongestName(names) {
  let longestNameIndex;

  let maxNameLength = 0;
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > maxNameLength) {
      longestNameIndex = i;
      maxNameLength = names[i].length;
    }
  }
  return names[longestNameIndex];
}

console.log(getLongestName(persons)); //kaoru

//Now using For Of

let pets = ['chichi', 'marcelo', 'pinky'];

function getLongestNames(names) {
  let longestNameIndex;

  let maxNameLength = 0;
  for (let [index, name] of names.entries()) {
    if (name.length > maxNameLength) {
      longestNameIndex = index;
      maxNameLength = name.length;
    }
  }
  return names[longestNameIndex];
}
console.log(getLongestNames(pets)); //marcelo

//Now with For In

function getLongestNames3(names) {
  let longestNameIndex;
  let maxNameLength = 0;

  for (let index in names) {
    if (names[index].length > maxNameLength) {
      longestNameIndex = index;
      maxNameLength = names[index].length;
    }
  }
  return names[longestNameIndex];
}

console.log(getLongestName(pets));

//NOTE:You get an array of numbers, return the sum of all of the positives ones.

let arrPositives = [1, 5, 4, 2, -12, -54, 74];

function positiveNumber(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

console.log(positiveNumber(arrPositives)); //86
console.log((positiveNumber([1, 2, 3, 4, 5]), 15));
console.log((positiveNumber([1, -2, 3, 4, 5]), 13));
console.log((positiveNumber([]), 0));
console.log((positiveNumber([-1, -2, -3, -4, -5]), 0));
console.log((positiveNumber([-1, 2, 3, 4, -5]), 9));

//For of

let sum2 = 0;
for (let value of arrPositives) {
  if (value > 0) sum2 += value;
}

console.log(sum2); //86

//With reduce method.

let sum3 = arrPositives.filter(n => n > 0).reduce((sum, n) => (sum += n), 0);
console.log(sum3); //86

/*NOTE: Order names lexicographically
Using sort function Array.prototype.sort() sorts an array in place it means
it modifies the original array we need to clone it to have two different sorted 
Arrays.

By default, it orders in ascending order. The answer start with Mar.
*/

let name = ['Maria', 'Mar', 'Ocean11', 'Nano', 'Proxy', 'Paco'];

//Ascending
let ascendingNames = [...names];
ascendingNames.sort();
console.log(ascendingNames); //[Mar, Maria, Nano, Ocean11, Paco, Proxy]

//Descending

let descendingNames = [...names];

/*If sorting function returns a negative number, name2 goes before name1.
If it return a positive number, name2 goes after name1 if it return 0, they 
stay where they are.

This method used the Unicode chart 0 es la posicion de donde queremos empezar 
en este caso 0 es la inicial.
This output should be start with proxy.
*/

descendingNames.sort((name1, name2) => {
  return name2.charCodeAt(0) - name1.charCodeAt(0);
});
console.log(descendingNames); //[Proxy,Paco,Ocean11,Nano,Maria,Mar]

/*NOTE: Using find method in a function.*/

const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];

function doesWordExist(arr, word) {
  return arr.includes(word);
}

console.log(doesWordExist(wordsFind, 'eating')); //true

console.log(doesWordExist(wordsFind, 'eat')); //false

/*NOTE: Count repetition using a for loop. */
const wordsCount = [
  'machine',
  'machine',
  'machine',
  'machine',
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
];

function howManyTimes(arr, word) {
  if (arr.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == word) {
      count += 1;
    }
  }
  return count;
}

console.log(howManyTimes(wordsCount, 'machine')); //5

//NOTE: Another popular way to order the movies is to sort them alphabetically using the title key. However, in this case, we only need to print the title of the first 20. Easy peasy for an expert like you. 😉

//Create a orderAlphabetically() function, that receives an array and returns an array of first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.

//Solution with arrow function

function orderAlphabetically(arr) {
  let clone = [...arr];
  let result = clone
    .sort((movie1, movie2) => movie1.title.localeCompare(movie2.title))
    .map(movie => movie.title);

  return result;
}

console.log(orderAlphabetically(movies));

//SUM THE RATE OF THE ARRAY MOVIES

//Sum rate

function sumRate(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].rate;
  }
  return sum;
}

console.log(sumRate(movies)); //27.5

//NOTE: Changin the time : string value to number using split, replace and concatenation.

let duration = '2h 22min';

let newArr = duration.split(' ', 2);
console.log(newArr); //['2h','22min']

let newArr2 = newArr[0].replace('h', '');
console.log(newArr2); //2

let newArr3 = newArr[1].replace('min', '');

console.log(newArr3); //22

let result = newArr2 * 60;
console.log(result); //120

let result2 = Number.parseInt(newArr3);

console.log(result2); //22

let finalArr = result + result2;
console.log(finalArr); //142 min.

//NOTE: Exercise using Map() = We have an array of objects but we need a new array with only the firstName of each object.

let users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' },
];

let firstName = users.map(f => f.firstName);
console.log(firstName);
/*['Bradley',  'Chloe','Jonathan', 'Michael',
'Robert',   'Wes','Zach']*/

function firstName2(arr) {
  return arr.map(f => f.firstName);
}

console.log(firstName2(users)); /*['Bradley',  'Chloe','Jonathan', 'Michael',
'Robert',   'Wes','Zach']*/

//NOTE: Using spread operator.

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let newArr = [...arr];
console.log(newArr); //[10,20,30,40,50,60,70,80,90,100];

let object = {
  firstName: 'Tatiana',
  lastName: 'Vargas',
};

console.log(object);

let newCopyObj = { ...object };
console.log(newCopyObj); //{ firstName: 'Tatiana', lastName: 'Vargas' }

//Passing a value by reference.
newCopyObj.firstName = 'Luis';
console.log(newCopyObj); //{ firstName: 'Luis', lastName: 'Vargas' }
