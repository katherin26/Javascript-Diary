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
