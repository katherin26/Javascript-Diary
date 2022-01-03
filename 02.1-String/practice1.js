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
