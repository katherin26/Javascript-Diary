//NOTE: Exercises using split

//Split

console.log(`a + very + nice + string + using + split`.split('+'));
//[ 'a ', ' very ', ' nice ', ' string ', ' using ', ' split' ]

console.log('Cat and dog'.split(' ')); // [ 'Cat', 'and', 'dog' ]

//NOTE: Split and Destructuring.

const [firstName, lastName] = 'Catalina octavio'.split(' ');
console.log(firstName); //Cataline
console.log(lastName); //octavio

//NOTE: Using join() method , change the lastName in Uppercase and add the Mr. at the beginning.

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Catalina OCTAVIO.

//NOTE: CapitalizeName with Split().

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('cats, dogs and birds.');
//Cats, Dogs And Birds.

//NOTE: Padding a string = Add a number of characters to the string.

const message = 'Go to gate 43.';
console.log(message.padStart(20, '+').padEnd(30, '+'));
//++++++Go to gate 43.++++++++++
console.log('Queen'.padStart(20, '+').padEnd(30, '+'));
//+++++++++++++++Queen++++++++++

//NOTE: Credit card number with padStart().

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(542511452215444)); //***********5444

console.log(maskCreditCard(454548444455884)); //***********5884

//NOTE:  Repeat Method.

const message2 = 'Bad Weather... ALL DEPARTURES DELAYED...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'***'.repeat(n)}`);
};

planesInLine(2); //There are 2 planes in line ******
planesInLine(4); //There are 4 planes in line ************
planesInLine(6); //There are 6 planes in line ******************

//NOTE: Using a function change the names to camel Case.

let text = `first_underscorecase
name_lastname
Same_lastname
calculate_AGE
delayed_departure`;

function toCamelCase(str) {
  const [a, b] = str.trim().split('_');
  return a.toLowerCase() + b[0].toUpperCase() + b.slice(1).toLowerCase();
}

let list = text.split('\n');
console.log(list);

let newArr = [];
let newList = '';
for (let text of list) {
  let newText = toCamelCase(text);
  newArr.push(newText);
  newList += newText + '\n';
}

console.log(newArr.join('\n'));
console.log(`----------------`);
console.log(newList);

//NOTE: ARRAY TO STRING USING A FUNCTION AND STRING().

function arrayToString(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + String(arr[i]);
  }
  return str;
}

console.log(arrayToString(['k', 'e', 'l', 'l', 'o', 'g', 's']));
console.log(arrayToString(['K', 'a', 't', 'a', 'l']));

//---------------------------------------//

const obj = {
  name: 'Lola',
  citiesVisited: ['Seoul', 'New york', 'California', 'Washington', 'Turquia'],
  pets: [{ name: 'pepe' }, { name: 'pepa' }, { name: 'pepi' }],
};

//NOTE: String representation of object.

const objString = JSON.stringify(obj);
console.log(objString);

/* {"name":"Lola","citiesVisited":["Seoul","New york","California","Washington","Turquia"],"pets":[{"name":"pepe"},{"name":"pepa"},{"name":"pepi"}]}*/
