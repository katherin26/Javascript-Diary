//NOTE: Make an array of numbers that are doubles of the first array.

let data = [2, 5, 100];
function doubleNumbers(arr) {
  return arr.map(el => el * 2);
}

doubleNumbers(data); //[ 4, 10, 200 ]

//NOTE: Take an array of numbers and make them strings.

function stringItUp(arr) {
  return arr.map(el => el.toString());
}

stringItUp(data); //[ '2', '5', '100' ]

//NOTE: Capitalize each of an array of names.

let data2 = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
function capitalizeName(arr) {
  return arr.map(el => el.toUpperCase());
}

capitalizeName(data2); //[ 'JOHN', 'JACOB', 'JINGLEHEIMER', 'SCHMIDT' ]
