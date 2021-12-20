/*NOTE: Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each other and
preserving the original order of elements. */

//SOLUTION WITH FUNCTION

function unique_in_order(sequence) {
  let arrToFilter = Array.isArray(sequence) ? sequence : sequence.split('');

  let filtered = arrToFilter.filter(function (word, index) {
    if (arrToFilter.indexOf(word) === index) {
      return true;
    } else {
      return false;
    }
  });
  return filtered;
}

console.log(unique_in_order('AAAABBBCCDAABBB'));

//WITHOUT FUNCTION

const str = 'AAAABBBCCDAABBB';

const result = str.split('');
const filtered = result.filter(function (word, index) {
  if (result.indexOf(word) === index) {
    return true;
  }
});

console.log(filtered);

//NOTE: Using a function inside another function like a helper function.

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//NOTE: Using helpers functions.

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1982, 'mike'));
