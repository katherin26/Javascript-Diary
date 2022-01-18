//NOTE: Iterate over the array of objects and change the patient name to Upercase.

let patients = [
  {
    name: 'John',
    temp: 38,
  },
  {
    name: 'Eva',
    temp: 39,
  },
  {
    name: 'Ocelot',
    temp: 40,
  },
  {
    name: 'Snake',
    temp: 20,
  },
];

function toUpperCase(arr) {
  let newObj = arr.map(function (el) {
    let clone = { ...el };
    console.log(clone);
    clone.name = clone.name.toUpperCase();
    return clone;
  });
  return newObj;
}

console.log(toUpperCase(patients));
/*{ name: 'John', temp: 38 }
{ name: 'Eva', temp: 39 }
{ name: 'Ocelot', temp: 40 }
{ name: 'Snake', temp: 20 }
[
  { name: 'JOHN', temp: 38 },
  { name: 'EVA', temp: 39 },
  { name: 'OCELOT', temp: 40 },
  { name: 'SNAKE', temp: 20 }
] */

//NOTE: Using map and toUpperCase() change the name of the patients.

let patients = ['kkk', 'pppp', 'sss'];

const toUpperCase = patients.map(name => name.toUpperCase());
console.log(toUpperCase); //[ 'KKK', 'PPPP', 'SSS' ]

//NOTE: Convert to upperCase and array of objects.

function convertToUpperCase(arr) {
  let newObj = arr.map(function (pt) {
    pt.name = pt.name.toUpperCase();
    return pt;
  });
  return newObj;
}

console.log(convertToUpperCase(patients2));
//[ { name: 'KATHE', temp: 38 } ]*/

//NOTE: USING FOR IN ITERATE OVER THE ARRAY AN PRINT THE KEYS AND THE VALUES.

//Exercise 1.

let colors = ['Yellow', 'Red', 'Green'];
for (let value in colors) {
  console.log(colors[value]);
}

/*
yellow 
red 
green*/

//Exercise 2.

let object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`I am key = ${property}`);
  console.log(`I am value = ${object[property]}`);
}

/*
I am Property = a
I am Object Property = 1
I am Property = b
I am Object Property = 2
I am Property = c
I am Object Property = 3
 */
