'use strict';

/*NOTE: PROMISE THEN CATCH*/

const p1 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Hello'));

const p2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 120, 'Goodbye')
);

const p3 = new Promise((resolve, reject) => setTimeout(reject, 10, 'Oops!'));

Promise.race([p1, p2, p3])
  .then(result => console.log(result))
  .catch(reason => console.log('Something went wrong...'));

/*Promise {<pending>} 
  Something went wrong 

  Given an iterable of Promises, Promise.race() returns a Promise that resolves or rejects with the value of the 
  first Promise that settles (the first Promise that resolves or rejects).

  In this case, p3 settles first, rejecting after 10 ms and falling into the catch() handler.
  */

/*NOTE: PROMISE.ALL RESOLVE ORDER */

/*We have a timer function that returns a Promise that resolves after a random amount of time. We use Promise.all
  to resolve an array of timers. What gets logged?? */

const timer = a => {
  return new Promise(res =>
    setTimeout(() => {
      res(a);
    }, Math.random() * 100)
  );
};

const all = Promise.all([timer('first'), timer('second')]).then(data =>
  console.log(data)
);

/*The order in which the Promises resolve does not matter to Promise.all. We can reliably count on them to be 
returned in the same order in which they were provided in the array argument.*/
