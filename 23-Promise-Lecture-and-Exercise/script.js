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

//NOW LETS USE ASYNC CODE THE OLD WAY.
//When this function is called, it means we already have a result.
wakeUp1('9:00 AM', 'Kt', function (error, result) {
  console.log(result);

  if (!error) {
    brushTeeth1('9:15AM', 'KT', function (error, result) {
      console.log(result);
      //If there was no error, we can proceed with our next action.

      if (!error) {
        prepareCoffee1('9:30AM', 'Kt', function (error, result) {
          console.log(result);
          //This is becoming a callback hell , It's very difiicult to read.
          if (!error) {
            study1('10:00AM', 'kt', function (error, result) {
              console.log(result);
            });
          }
        });
      }
    });
  }
});

/*SECOND WAY (PROMISES)
Much easier to read than callback hell, as you can see we no longer 
pass a callback to receive our results.
Instead, this functions returns a Promise, which is an object with its own methods
to handle results (then) and errors (catch).

A promise constructor receives a function, which is the function where our logic will
be, when everything goes well we call resolve with the result, if something goes wrong , 
we call reject with an error.
*/

function wakeUp2(time, name) {
  return new Promise((resolve, reject) => {
    /*We could call resolve immediately, but we want to simulate it takes time
    In our example there is no error, there is no call to reject,
    but in case there was an error, you should call it like reject('There was an error').
     */
    setTimeout(function () {
      /*Resolve will be the function passed to the then method of the promise. */
      resolve(`${name} woke up at ${time}`);
    }, 4000);
  });
}

function brushTeeth2(time, name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(`${name} brushed teeth at ${time}`);
    }, 4000);
  });
}

function prepareCoffee2(time, name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(`${name} prepared coffee at ${time}`);
    }, 4000);
  });
}

function study2(time, name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(`${name} studied at ${time}`);
    }, 4000);
  });
}

/*Let's implement this returns a Promise object, this means we can use 
methods like then and catch.
This function represents the resolve function inside the promise.
We can chain promises by returning another promise remember that brushTeeth2 returns
a promise, we are just returning that promise again so we can chain it.

*/

wakeUp2('10:00AM', 'Bryan')
  .then(function (result) {
    console.log(result);
    return brushTeeth2('10:15AM', 'Bryan');
  })
  .then(function (result) {
    console.log(result);
    return prepareCoffee2('10:30AM', 'Bryan');
  })
  .then(function (result) {
    console.log(result);
    return study2('11:00AM', 'Bryan');
  })
  .then(function (result) {
    console.log(result);
    //No more chaining.
  })
  .catch(function (error) {
    console.error(error);
  });

/*Third way (async/await), this method uses promises, the only
  thing different is the way we handle results and errors the way
  we handle results and errors is more natural.
  We can use the same promises from above.
  Instead of using then to handle results, we can just await, whatever 
  is passed to the resolve function inside the promise will be returned by await wakeup2.
  */

(async () => {
  try {
    const result1 = await wakeUp2('10:00AM', 'Isaac');
    console.log(result);
    const result2 = await brushTeeth2('10:15AM', 'Isaac');
    console.log(result2);
    const result3 = await prepareCoffee2('10:30Am', 'Isaac');
    console.log(result3);
    const result4 = await study2('11:00AM', 'Isaac');
    console.log(result4);
  } catch (e) {
    //Same here, if any promise call reject, that error will be
    //cought by the catch block.
    console.log(e);
  }
})();

//Async functions can also be used as promises.
