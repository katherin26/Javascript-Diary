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

/*TITTLE: BUILDING A SIMPLE PROMISE :

We create a new promise using the promise constructor,Just like many other built-in objects .
Promises are essentially just a special kind of object in JS.
The promise constructor takes exactly one argument and that is the so-called executor function, We need to pass in 
a function , as soon as the promise constructor runs it will automatically execute this executor function that we 
pass in and as it executes this function it will do so by passing in two other arguments and those are :
 (resolve, reject).

This executor function that we specified here is the function which will contain the asynchronous behavior that we're
trying to handle with the promise and eventually produce a result value. Calling the resolve() function like this 
will Mark this promise as a fulfilled promise which we can also say a resolved promise and that's the reason why this
method here is called resolve()., Inside resolve() we pass the fulfilled value of the promise so that it can later
be consumed with the then() method, Now let's handle the opposite case with reject(), basically where we want to mark
this promise as rejected. Into the reject() method we pass in the error message that we later want to be able in the
catch handler 

In practice we usually only built promises to basically wrap old callback based function into promises and this is 
a process that we call promisifying and this means convert callback based asynchronous behavior to promise based 
*/

const lotteryPromise = new Promise(function (resolve, reject) {
  //This is how we encapsulate any asynchronous into a promise.
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You win ... =)`);
    } else {
      reject(new Error(`You lost your money....=(`));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//PROMISIFYING SetTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

//This is exactly when we wanted to chain two sequential Ajax calls using the fetch function.
wait(2)
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited for 1 second`));

/*
  I waited for 2 seconds
  I waited for 1 second

  We have once again a nice chain of asynchronous behavior that happens nicely in a sequence and all without the 
  callback hell.
  */

//ANOTHER WAY TO CREATE A FULFILLED OR A REJECTED PROMISE IMMEDIATELY !!
//This should appear at the beggining because is immediately!
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.log(x));
