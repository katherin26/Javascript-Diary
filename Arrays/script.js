//TITTLE: --------------------------------METHODS--------------------------------------//
let arr = ['a', 'b', 'c', 'd', 'e'];

//TITTLE: -------------SLICE = We can extract part of any array, but without changing the original array.------//

console.log(arr.slice(2)); //first parameter = index at which we will start extracting , return a new array.
//(3) ["c","d","e"]

console.log(arr.slice(2, 4)); //(2) ["c","d"]

//NOTE: NEGATIVES

console.log(arr.slice(-2)); //(2) ["d", "e"]

console.log(arr.slice(1, -2)); //(2) ["b", "c"]

//NOTE: CREATE A SHALLOW COPY
//We can use this is when you want to chain multiple methods together , calling one after the other.
console.log(arr.slice()); //(5) ["a", "b", "c", "d", "e"]

//NOTE: SAME RESULT WITH SPREAD OPERATOR
console.log([...arr]); // (5) ["a", "b", "c", "d", "e"]

//TITTLE: ---------------------------SPLICE = Splice change the original array---------------------------------//

//console.log(arr.splice(2)); //(3) ["c", "d", "e"] = it takes part of the array.
console.log(arr.splice(-1)); //remove the last element // ["e"]
console.log(arr); //(2) ["a", "b"]

//TITTLE: -----------------------------------REVERSE-------------------------------------------------//
//NOTE: this method does actually mutate the original array.
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//TITTLE: -----------------------------------CONCAT--------------------------------------------------//

const letters = arr.concat(arr2);
console.log(letters); //(9) ["a", "b", "c", "d", "f", "g", "h", "i", "j"]

//NOTE: SAME RESULT WITH SPREAD OPERATOR = and not mutate any of the involved arrays.
console.log([...arr, ...arr2]); //(9) ["a", "b", "c", "d", "f", "g", "h", "i", "j"]

//TITTLE: ------------------------------------JOIN---------------------------------------------------//

console.log(letters.join('-')); // a-b-c-d-f-g-h-i-j

//TITTLE: -----------------------------LOOPING ARRAYS = forEach--------------------------------------//

//NOTE: forEach is technically a higher order function, which requires a callback function in order to tell it
//what to do.
//forEach loop over the array and in each iteration it will execute this callback function.
//Also as the forEach method calls this callback function in each iteration it will pass in the current element
//of the array as an argument
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
      } else {
        console.log(`You withdrew ${Math.abs(movement)}`); //Math.abs() remove the sign
      }
}*/

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); //Math.abs() remove the sign
  }
});

//in iteration 0: function(200)
//in iteration 1: function(450)
//in iteration 2: function(400)
//....
