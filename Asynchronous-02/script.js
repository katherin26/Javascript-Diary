'use strict';

/*TITTLE: THE EVENT LOOP IN PRACTICE */
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000; i++) {}
  console.log(res);
});

console.log(`Test end`);
/*Promise.resolve allows us to build a promise, so to create a promise that is immediately resolved, so one that
immediately has a success value. 

The result is :
Test start 
Test End 
Resolved Promise 1 ===> This one will be put on the micro-tasks queue and this has priority over the callback queue.
Resolved Promise 2
0 sec timer  ====> this 0 seconds that we have here are not a guarantee .
*/
