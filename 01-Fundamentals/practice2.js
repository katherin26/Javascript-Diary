//NOTE: COPY BY VALUE USING PRIMITIVE VALUES LIKE

//NUMBER.

let age = 20;
let ageCopy = age;

ageCopy = 35;

console.log(age); //20
console.log(ageCopy); //35

//BOOLEAN

let boolean = true;
let booleanCopy = boolean;

booleanCopy = false;

console.log(boolean); //true
console.log(booleanCopy); //false

//STRING

let string = 'Original Name';
let stringCopy = string;

stringCopy = 'Copy Name';

console.log(string); //Original Name
console.log(stringCopy); //Copy Name

//NOTE: COPY BY REFERENCE
//OBJECTS

let person = {
  name: 'Lola',
  age: 29,
};

let personCopy = person;
personCopy.name = 'Br';

//This modified the name inside the original object.
console.log(person.name); //Br
console.log(personCopy.name); //Br

//NOTE: COPY BY REFERENCE
//ARRAYS

let pets = ['Isaac', 'Ada'];
let petsCopy = pets;

petsCopy.pop();
petsCopy.push('Jill');

//MODIFIED THE ORIGINAL ARRAY BECAUSE POINT TO THE ORIGINAL ARRAY.
console.log(pets); //[ 'Isaac', 'Jill' ]
console.log(petsCopy); //[ 'Isaac', 'Jill' ]
