'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector(
  '.countries'
); /*
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
};*/ /*NOTE: 
What we need to do is to register a callback on the request object for the load event  and then the event is
addEventListener and here on the request we will wait for the load event, We basically send off the request and so
that request then fetches the data in the background and then once that is done it will emit the load event and so
using this event listener we are waiting for that event and so as soon as the data arrives this callback function
here will be called*/ /*NOTE: 5 AJAX Calls at the same time : if we reload the page a couple of times then they might appear in a different
order and the reason for that is basically that the data arrives at a slightly different time each time that we're
loading the page and this shows the non-blocking behavior in action*/ //TITTLE: WELCOME TO CALLBACK HELL

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
  countriesContainer.style.opacity = 1;
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
getCountryAndNeighbour('mexico');

/*NOTE: We have one AJAX call here that depends on another one and so what we have here is one callback function
 inside of another one , in other words , we have nested callbacks. If we wanted to do more requests in sequence ?
 like the neighbor of the neighbor like 10 times over . So in that case, we would end up with callbacks inside of 
 callbacks ..etc.
 For that kind of structure and for that kind of behavior , we have a special name and is callback hell .

 Callback hell = Is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence 

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
