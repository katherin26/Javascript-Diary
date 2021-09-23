'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //countriesContainer.style.opacity = 1;
};

/*
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText); //convert string to object
    console.log(data);

    const html = `

  <article class="country">
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
  });
};*/

/*NOTE: 
What we need to do is to register a callback on the request object for the load event  and then the event is
addEventListener and here on the request we will wait for the load event, We basically send off the request and so
that request then fetches the data in the background and then once that is done it will emit the load event and so
using this event listener we are waiting for that event and so as soon as the data arrives this callback function
here will be called*/

/*NOTE: 5 AJAX Calls at the same time : if we reload the page a couple of times then they might appear in a different
order and the reason for that is basically that the data arrives at a slightly different time each time that we're
loading the page and this shows the non-blocking behavior in action*/

//TITTLE: OUR FIRST AJAX CALL : XMLHttpRequest

//OLD ONE = XML HTTP
/*const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  */
/*NOTE:
 data = request.send();//null undefined
 So, with this we basically open the request and now we need to also send off the request to the URL
 here, In order to get the result, we can set some variable (date) simply to this result here and the reason why 
 we cannot do this is because the result is simply not there yet, So this AJAX call that we just send off here is 
 being done in the background , while the rest of the code keeps running , and this is the asynchronous, non-blocking
 behavior. 
*/ const renderCountry = function (
  data,
  className = ''
) {
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
  //countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText); //convert string to object
    console.log(data);

    //Render country 1
    renderCountry(data);

    //Get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX call country 2 = this is really dependent on the first one, because we are firing of the second AJAX  call
    //in the callback function of the firstone
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      //console.log(this.responseText);
      const data2 = JSON.parse(this.responseText); //the response of this API is no longer an array
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

//getCountryAndNeighbour('korea');
//getCountryAndNeighbour('usa');
//getCountryAndNeighbour('mexico');

//TITTLE: Welcome to callback hell!

/*NOTE: We have one AJAX call here that depends on another one, in other words, we have nested callbacks. If we 
wanted to do more requests in sequence ? like the neighbor of the neighbor like 10 times over. So in that case, 
we would end up with callbacks inside of callbacks ..etc.

For that kind of structure and for that kind of behavior , we have a special name and is callback hell .

Callback hell = Is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence.

 setTimeout(()=>{
   console.log('1 second passed');
   setTimeout(()=>{
     console.log('2 second passed');
     setTimeout(()=> {
     console.log('3 second passed');
     setTimeout(()=>{
       console.log('4 second passed');
     },1000)
    },1000)
   },1000)
 },1000)
 */

/*TITTLE: PROMISES AND FETCH API
 */
/*
const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request); //Promise {<pending>}*/

/*TITTLE: CONSUME A PROMISE = In this case we will consume the promise that was returned by the fetch function  */
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json(); //this response here is in fact a resolved value.
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};*/

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json()) //this response here is in fact a resolved value.
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} error ----`);
      renderError(`Something went wrong ${err.message}. Try again!!`);
    }) //catching errors.
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); //Finally works if catch itself also returns a promise.
};

//getCountryData('portugal');

/*Assume that the promise will be fullfilled and that we have a value available to work with, to handle this fulfilled 
state, We can use the then() method that is available on all promises. Into the then() method we need to pass a callback 
function that we want to be executed as soon as the promise is actually fulfilled, as soon as the result is available
this function will actually receive one argument once it's called by JS. And that argument is the resulting value of
 the fullfilled promise.

 In order to be able to actually read this data from the body , we need to call the json method on the response , json()
 is a method that is available on all responses of the fetch() method . The problem is that this json function itself
 is actually also an asynchronous function and it will also return a new promise and what we need to do is to actually
 return this promise, Now we need to handle that promise as well.

The way we do that is to then call another then(), so we need another callback function
 */

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
