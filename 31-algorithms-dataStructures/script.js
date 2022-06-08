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
