/*NOTE: STRING PRIMITIVE = has no methods.*/

const message = 'This is my first message';

console.log(typeof message); //string
console.log(message.length); //24 in the background JS interpret the text as an object and
//that's why you can use methods like length.
console.log(message[0]); //T Access to the index.
console.log(message[1]); //h
console.log(message.includes('my')); //true
console.log(message.startsWith('This')); //true = Because is the same syntax with uppercase in other case false.
console.log(message.endsWith('e')); //true
console.log(message.indexOf('my')); //8 = Is the position in the index with that element.
console.log(
  message.replace('first', 'second')
); /*replace returns a new string and the original
 remains intact (This is my second message).*/
console.log(message.toUpperCase()); //Return a new string and the original remains intact.
console.log(message.trim()); //This removes the white spaces. also you can use (trim left and trim right).

/*NOTE: ESCAPE NOTATION (\') = This became part of the single quote.*/
const myString = "This is 'another example";
console.log(myString); //This is 'another example

/*NOTE: BREAKS (\n) */
const mySecondString = 'This is \n my second example';
console.log(mySecondString);

//NOTE: SPLIT()

const myThirdString = 'This is my third example';
console.log(myThirdString.split(' ')); //[ 'This', 'is', 'my', 'third', 'Example' ]

//NOTE: STRING OBJECT
const another = new String('hi');
console.log(typeof another); //object

//EXAMPLE WITH SINGLE QUOTE O STRING LITERAL.
const message = 'This is my \n' + "' first' message";
console.log(message);

//EXAMPLE WITH BACK TICKS
const another = `This is my 'first' message`;
console.log(another);

//EXAMPLE EMAIL WITH TEMPLE LITERALS.

const name = 'Paty';
const email = `Hi ${name}, 
Thank you for joining my mailing list.

Regards,
Anonimo`;

console.log(email);

//NOTE: Using localeCompare

let name1 = 'Patricia';
let name2 = 'Lolo';

console.log(name1.localeCompare(name2)); //1 is Lolo.

//NOTE: How many "amet" words there in the paragraph.

let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar fermentum velit, in eleifend urna posuere sed. Mauris imperdiet venenatis est, id tempor diam ullamcorper non. Donec vehicula eros mi, sit amet scelerisque est hendrerit ac. Morbi a quam ut urna accumsan feugiat. Duis lorem ipsum, vulputate sed molestie sit amet, molestie at leo. Maecenas auctor nisi nec nibh luctus, quis congue nisl volutpat. Nunc auctor nisi eget lacus pretium, id fringilla diam euismod.`;

let countE = 0;
let paragraphArray = paragraph.split(' ');

console.log(paragraphArray); //This is an array .
console.log(paragraphArray.length); //74

for (let i = 0; i < paragraphArray.length; i++) {
  if (paragraphArray[i] === 'amet') countE++;
}

console.log(`The total "amet" words in the paragraph is ${countE}`); //1

//Another solution with RegExp

console.log(paragraph.match(/lorem/g).length);

//NOTE: Eliminate a and e with replace method.

function eliminatedV(str) {
  let newText = str.replace(/[ae]/gi, '');
  return newText;
}

console.log(eliminatedV('Tata vaaaagas lllleras zaappp'));

//NOTE: Eliminate a with *.

function replaceA(str) {
  let asterisco = str.replace(/[a]/g, '*');
  return asterisco;
}

console.log(
  replaceA(
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere'
  )
);

//NOTE: Write a function that determines if the value is a string.

function checkFunction(str) {
  if (typeof str === 'string') {
    console.log(`This value is a string.`);
  } else {
    console.log(`This value is not a string...`);
  }
}

console.log(checkFunction('kkkkk'));

//NOTE: Print each letter !

let furniture = 'Table';

for (let i = 0; i < furniture.length; i++) {
  console.log(furniture[i]);
}

// T a b l e

/*NOTE: Given a string, remove any characters that are unique from the string.
Example: 
Input : "abccdefee"
output: "cceee"
 */

//SOLUTION WITH REGULAR EXPRESSION CONSTRUCTOR

let letters = 'abccdefee';

console.log(letters.match(/e/g).length); //true

const lettersSplit = letters.split('');
console.log(lettersSplit); //['a', 'b', 'c','c', 'd', 'e','f', 'e', 'e']

const result = lettersSplit.filter(
  letter => letters.match(new RegExp(`${letter}`, 'g')).length > 1
);

console.log(result.join('')); // cceee

//SOLUTION WITH FOR LOOP AND hasOwnProperty.

let letters = 'abccdefee';

let letterCount = {};
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
  if (!letterCount.hasOwnProperty(letters[i])) {
    letterCount[letters[i]] = 1;
  } else {
    letterCount[letters[i]]++;
  }
}

console.log(letterCount); /*
a
b
c
c
d
e
f
e
e { a: 1, b: 1, c: 2, d: 1, e: 3, f: 1 }*/

let result2 = [];
for (property in letterCount) {
  console.log(`The letter ${property} has ${letterCount[property]} has
  ${letterCount[property]} Ocurrency.`);

  if (letterCount[property] > 1) {
    result2.push(property.repeat(letterCount[property]));
  }
}

console.log(result2.join(''));
/*
The letter a has 1 Ocurrency.
The letter b has 1 Ocurrency.
The letter c has 2 Ocurrency.
The letter d has 1 Ocurrency.
The letter e has 3 Ocurrency.
The letter f has 1 Ocurrency.
cceee

*/
