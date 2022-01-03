//NOTE: Exercises using split

//Split

console.log(`a + very + nice + string + using + split`.split('+'));
//[ 'a ', ' very ', ' nice ', ' string ', ' using ', ' split' ]

console.log('Cat and dog'.split(' ')); // [ 'Cat', 'and', 'dog' ]

//NOTE: Split and Destructuring.

const [firstName, lastName] = 'Catalina octavio'.split(' ');
console.log(firstName); //Cataline
console.log(lastName); //octavio
