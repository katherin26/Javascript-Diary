/*TITTLE: PRACTICE EXERCISES */

//NOTE: 1.
console.log(`practice arrays`);

const practiceArr1 = ['a', 'b', 'c'];
const practiceArr2 = ['b', 'c', 'a'];

console.log(practiceArr1.sort()); //['a', 'b', 'c'];
console.log(practiceArr2.sort()); //['a', 'b', 'c'];
console.log(practiceArr1.sort() === practiceArr1); //true
console.log(practiceArr2.sort() == practiceArr2); //true
console.log(practiceArr1.sort() === practiceArr2.sort()); //false

/*The array sort method sorts the original array and also returns a reference to that array.
The first equality test return true. This holds true for the second comparison as well: practiceArr2.sort() and
practiceArr2.sort() point to the same object in memory.

The third test, the sort order of practiceArr1.sort() and practiceArr2.sort() are the same; however, they still 
point to different objects in memory. The result is false for this reason.
*/

//NOTE: 2. What gets logged?

const mathArr = [x => x * 1, x => x * 2, x => x * 3, x => x * 4];

console.log(mathArr.reduce((acc, cur) => acc + cur(acc), 1)); //120

/*The initial value of the accumulator is 1 , 
  acc = 1
  cur = index 0 = x => x * 1;

  First iteration = 
  acc + cur(acc) =
   1  + 1*1 = 1
   2  + 2*2 = 6
   6  + 6*3 = 24
  24  + 24*4 = 120

*/

/*NOTE: 3. Spread and rename : What happens when we spread that array and change the firstName property on the 
0-index object.*/

const spreadArr1 = [{ firstName: 'James' }];
const spreadArr2 = [...spreadArr1];
spreadArr2[0].firstName = 'Jonah';

console.log(spreadArr1); //firstName: 'Jonah'

console.log(spreadArr1[0] === spreadArr2[0]); //true
/*Spread creates a shallow copy of the array, meaning the object contained in spreadArr2 is still pointing to the
same object in memory that the spreadArr1 object is pointing to. So, changing the firstName property of the object
in one array will be reflected by the object in the other array changing as well. */

//NOTE: COPY BY VALUE AND REFERENCE
const person = {
  name: 'Catalina',
  pet: {
    name: 'Lupita',
    age: 15,
  },
};

let { name: owner, pet } = person;
console.log(pet === person.pet); //true

owner = 'Moises';
pet.name = 'Isaac';
console.log(person.name); //Catalina
console.log(person.pet.name); //Isaac

/* Similar situation with destructuring , name is a primitive value and is a copy by value, but pet is a reference
copy  because is in nested object, which means in this case you have a shallow copy and you can modify the original 
person.pet object but you can not modify person.name*/

//NOTE: What gets logged in the following scenario??

const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
map(el => console.log(el)); // 1 2 3

/*['a','b','c'].map, When called, will call Array.prototype.map with a this value of ['a','b','c']. But when used 
as a reference, rather than called ['a','b','c'].map is simply a reference to Array.prototype.map.

Function.prototype.bind will bind the this of the function to the first parameter (in this case, that's [1,2,3]),
and invoking Array.prototype.map with such a this results in those items being irerated over and logged.
*/

//NOTE: These objects have the same properties and values, Which is created more efficiently?

const sameArr1 = [1, 2, 3];

const firstResult = sameArr1.reduce((acc, el, i) => ({ ...acc, [el]: i }), {});

const secondResult = {};
for (let i = 0; i < sameArr1.length; i++) {
  secondResult[sameArr1[i]] = i;
}

console.log(firstResult);
console.log(secondResult);

/*When secondResult is being set, the secondResult[sameArr1[i]] property is set to the current index on each 
iteration.When firstResult is being set, the spread syntax (...) will create a shallow copy of the accumulator
object(acc) on each iteration and additionally set the new property. This shallow copy is more expensive than not 
performing a shallow copy; firstResult requires the construction of 2 intermediate objects before the result 
is achieved, whereas secondResult does not construct any intermediate objects. Therefore, secondResult is being 
set more efficiently.  */

//NOTE: Consider the following mapping,What gets logged??

const myArr = ['a', 'b', 'c'];
const myMap = { a: 1, b: 2, c: 3 };

const result = myArr.map(letter => myMap[letter]);
console.log(result); //[1,2,3]

/*The map method will create a new array from an existing array by performing a specified transformation on each
array item. In this example, each letter is replaced by a corresponding object's value. */
