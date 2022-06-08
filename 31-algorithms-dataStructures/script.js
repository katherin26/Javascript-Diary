'use strict';

/*
NOTE:  BIG O notation
NOTE:  Counting Operations
*/

//Exercise 1
/* 1 multiplication , 1 addition, 1 division.
 So three simple operations regardless of the size of it, 
whether it's small or massive.*/

function addUpTo1(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo1(10)); //55 / O(1)

//Exercise 2
/*1 assignment , 1 initialization, 1n , 1n, 2n */
function addUpTo2(n) {
  let total = 0; //1 assignment
  for (let i = 1; i <= n; i++) {
    // 1 assignment ,  1n, 1n addition and 1n assignment.
    total += i; //1n addition, 1n assignment
  }
  return total;
}

console.log(addUpTo2(10));

/* 1 + 1 + 1n + 2(n) + 2(n)
    2 + 5(n)
    
     O(n)
*/

//Exercise 3

//1 , 10, 2(10) = 20
for (let i = 1; i <= 10; i++) {
  //10 , 10 * 10 = 100; 10 * 10 = 100
  for (let j = 1; j <= 10; i++) {
    //10*10 = 100, 10*10*10 = 1000, 10*10*10 = 1000
    for (let k = 1; k <= 10; i++) {
      console.log(i, j, k);
    }
  }
}

/*
1 
10 
2(10) = 20

10 
10 * 10 
10 * 10

10 * 10 
10 * 10 * 10
10 * 10 * 10 

= 0(n3)
*/

//Exercice 4

let total = 0; // 1 assigment
let i = 1; // 1 assigment
i <= n; //1n
i++; // 2n (1 addition and 1 assignment)
total += i; //2n (1 addition and 1 assignment)

// 1 + 1 + 1n + 2n + 2n
// 2 + 5n
// O(n)

//Exercise 5

n = 3;
let total = 0; //1 assignment
let i = 0; //1 assignment
i <= n; // (n = 3)
i++; //2(3) = 6
total += 1; // 2(6) = 6

/*1 + 1 + n + 2(n) + 2(n)
    2 + 4(n)
     O(n)
*/

//Exercise 6

n = 10;
let total = 0; // 1 assigment
let i = 0; // 1 assignment
i <= n; // (n = 10)
i++; // 1 assigment, 1 addition  = 2(n) = 20
total += i; // 1 assigment, 1 addition = 2(n) = 20

/* 1 + 1 + 1n + 2(n) + 2(n) 
    2 + 5(n)
        n

    O(n)

*/

//Exercise 7

function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

/* 1 + 1n + 2(n) + 1n
        1 + 3(n)
            4(n)
            
            O(n)
 */

//Exercise 8

function logAtMost10(n) {
  for (var i = 1; i <= Math.min((n, 10)); i++) {
    console.log(i);
  }
}

/*  1 + 1n + 2(n) + 1n
        1 + 4(n)

        O(1) ===> constante ((n) is going to be the minimun number below ten.)
*/

//Exercise 9

function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}

/*
    1 + 1n + 2(n) + 1n
        1 + 4(n)
          
        O(n) ===> Lineal ((n) is going to be the maximun number)
*/

//Exercise 10

function onlyElementAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

/* 3 + 1 + 1(n) + 2(n) + 1(n) + 1(n) + 1(n) + 1(n)
        4 + 7(n)
          
        O(n) ===> Lineal

*/

//Exercice 11

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

/*
       1 + 1 1(n) + 2(n) = 2 + 3(n)

        1(n)

         1(n) + n * n + 2(n) * n = 1(n) + n^2 + 2(n^2)

          2(n)

          1(n)

    ==> 2 + 3(n) + 1(n) + 1(n) + n^2 +  2(n^2) + 2(n) + 1(n)
    
            2 + 8(n) + 3(n^2)
            
             2 + 11(n^2)

             ==> O(n^2)
*/

//NOTE: Space Complexity
/*Explanation: We have one variable called total, one number and the we're looping 
through, and then we have a second declaration inside the for loop (let i = 0).

So no matter what the size of the array is of NP or in this case, IRR, as it grows 
it might be a thousends items.

It doesn't have an impact on the space that's taken up because we only have these two
variables and they exist no matter what.
*/

function sum(arr) {
  let total = 0; //1 space
  //1 space
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
} //O(1) space

function double(arr) {
  let newArr = []; //o(n) Lineal(it's increasing with push (input = newArr))
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

//Exercise 1

function logUpToE(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
} //O(1)

//Exercise 2

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
} // O(1)

//Exercise 3

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
} // O(n)

//Exercise 4

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

//Exercise 5

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
} //O(n)
