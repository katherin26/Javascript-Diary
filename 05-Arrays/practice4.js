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
