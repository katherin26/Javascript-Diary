'use strict';

/*NOTE: PROMISES

There are 3 ways of representing async code (code that takes time to produce a result and 
this will return result in the future.)
Let's represent the following actions, each action take time to finish.

1. Wake up
2. Brush Teeth 
3. Prepare coffe
4. Study
*/

/*NOTE: THE OLD WAY WITH CALL BACKS.
When a function takes time to finishm it does not immediately return a result, instead it receives
a callback function which will be called with the result.
*/

/*
We could immediately call cb like cb (`${name} woke up at ${time}`)
But we want to simulate it takes time, for that we use setTimeOut which simply calls a function
after N seconds.

In the old way, the first parameter of the callBack was used to indicate there was an error in this
example there is no error, but if you wanted to indicate something went wrong just call the function
like this cb(`There was an error etc.) the second parameter will be the result.
*/

function wakeUp1(time, name, cb) {
  setTimeout(function () {
    cb(null, `${name} woke up at ${time}`);
  }, 3000);
}

function brushTeeth1(time, name, cb) {
  setTimeout(function () {
    cb(null, `${name} brushed teeth at ${time}`);
  }, 3000);
}

function prepareCoffee1(time, name, cb) {
  setTimeout(function () {
    cb(null, `${name} prepared coffee at ${time}`);
  }, 3000);
}

function study1(time, name, cb) {
  setTimeout(function () {
    cb(null, `${name} studied at ${time}`);
  }, 3000);
}
