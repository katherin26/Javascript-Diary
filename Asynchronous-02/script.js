'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.languages[0].name}</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //countriesContainer.style.opacity = 1;
};

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

//NOTE: PROMISIFYING SetTimeout
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

/*TITTLE: PROMISIFYING THE GEOLOCATION API

getCurrentPosition accepts two callbacks where the first is for the success and the second one is for the error.
The first callback actually gets access to the position object and the secondpne is in case that the user does not
allow the page to get access to the current location .

navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
); //GeolocationPosition{...}
*/

//This is another great opportunity to promisify a callback based API, to a promise based API

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //navigator.geolocation.getCurrentPosition(
    //position => resolve(position),
    //err => reject(err)
    //);
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//getPosition().then(pos => console.log(pos));

//TITTLE: CHALLENGE WhereAmI

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: long } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country} `);

      return fetch(`https://restcountries.com/v3/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })

    //IMPORTANT: Fixed the renderCOuntry function , something happen with the API!

    /*.then(data => {
      renderCountry(data[0]);
    })*/

    .catch(err => console.error(err)); //Handle the erro "Problem with geocoding 403"
};

//btn.addEventListener('click', whereAmI);

/*TITTLE: CONSUMING PROMISES WITH ASYNC/AWAIT 
Inside an a async function, we can have one or more await statements and then we need the promise , we can use the 
promise returned from the fetch function and await for the result.

Basically await will stop decode execution at this point of the function until the promise is fulfilled , until the
data has been fetched in this case.
NOTE: stopping execution in an async function which is what we have here is actually not a problem because 
this function is running asynchronously in the background and  therefore it is not blocking the main threat of
execution , it's not blocking the call stack. 

NOTE: async and await is in fact simply syntactic sugar over the then() method in promises.
  
          Using then() =
          fetch(`https://restcountries.com/rest/v2/name/${country}).then(res => console.log(res));
*/

/*TITTLE: ERROR HANDLING WITH TRY AND CATCH 
The try catch statement is actually used in regular JS as well, Try catch has nothing to do with async /await 
but we can still use it to catch errors in async functions .

try{
  let y = 1;
  const x = 2;
  x = 3;
} catch(err){
  alert(err.message)
}
*/

const whereAmI2 = async function () {
  try {
    //Geolocation , getPosition line 104
    const position = await getPosition();
    const { latitude: lat, longitude: long } = position.coords;

    //Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    //Country Data
    const res = await fetch(
      `https://restcountries.com/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json(); //this itself return a new promise, and then chain another then handler.
    // But all we have to do is await this and the we can store the results directly into the data variable that
    //we have been using before.
    console.log(data); //[{...}]
    renderCountry(data[0]);

    return `You are in ${dataGeo.city} , ${dataGeo.country}`;
  } catch (err) {
    console.log(err);
    renderError(`Something went wrong ${err.message}`);
    //Reject promise returned from async function
    throw err;
  }
  //IMPORTANT: Fixed the renderCOuntry function , something happen with the API!
};

console.log(`1 will get location`);
//TITTLE: Returning values from async function
/*const city = whereAmI(); console.log(city) */
/*
whereAmI2()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.log(`2: ${err.message}`))
  .finally(() => console.log(`3: Finished getting location`));
console.log(`3 Finished getting location`);
*/

(async function () {
  try {
    const city = await whereAmI2();
    console.log(city);
  } catch (err) {
    console.log(`2:${err.message}`);
  }
  console.log(`3: Finished getting location`);
})();

//TITTLE: Running Promises in Parallel
/*Let's imagine that we wanted ti get some data about three countries at the same time but in which the order that 
the data arrives does matter at all*/

const get3Countries = async function (c1, c2, c3) {
  try {
    /* const [data1] = await getJSON(
      `https://restcountries.com/rest/v2/name/${c1}`
    );
    const [data2] = await getJSON(
      `https://restcountries.com/rest/v2/name/${c2}`
    );
    const [data3] = await getJSON(
      `https://restcountries.com/rest/v2/name/${c3}`
    );
    console.log([data1.capital, data2.capital, data3.capital]);*/

    //Loading at the same time
    //We use the promise.all combinator function, This is a kind of helper function on this promise constructor.
    //It's a static method, this function here takes in an array of promises and it will return a new promise which
    //will then run all the promises in the arrray at the same time

    const data = await Promise.all([
      getJSON(`https://restcountries.com/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.com/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.com/rest/v2/name/${c3}`),
    ]);
    // console.log(data); // [Array(1), Array(2), Array(3)]
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
