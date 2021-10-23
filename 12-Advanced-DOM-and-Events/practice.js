'use strict';

/*NOTE: In what order will the numbers 1-4 be logged to the console when the code below us executed? */

(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})(); // 1,4,3,2

/*1 and 4 are displayed first since they are logged by simple calls to console.log() without any delay. 2 is disp-
lay after 3 because 2 is being logged after a delay of 0 msecs. Note that, despite 3 having a delay of 0 msecs,
its code will only be executed after the current call stack is cleared. */

/*NOTE: CALLBACK setTimeOut
Which of the following functions will add two variables and pass the sum to a callback function after 2 seconds?
*/

//A
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2);
};

//B CORRECT ANSWER
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2000);
};

//C
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y, 2);
  });
};

//D
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y, 2000);
  });
};

/*The setTimeout function generally takes two variables: the first variable is the function to be executed, and
the second variable is the interval, in milliseconds, after which the function gets executed. */
