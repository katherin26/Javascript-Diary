//NOTE: Make an array of numbers that are doubles of the first array.

let data = [2, 5, 100];
function doubleNumbers(arr) {
  return arr.map(el => el * 2);
}

doubleNumbers(data); //[ 4, 10, 200 ]
