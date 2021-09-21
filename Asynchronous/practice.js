'use strict';

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
