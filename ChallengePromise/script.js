'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/* 

CHALLENGE 1 

You will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use 
a second API to geocode coordinates.

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) 
(these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a 
meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. 
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the
 provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 
403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an 
error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding
API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors.

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
*/

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>1.000.000</p>
      <p class="country__row"><span>🗣️</span>LANGUAGE</p>
      <p class="country__row"><span>💰</span>CURRENCIES</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
const getJSON = function (url) {
  return fetch(url).then(res => {
    if (!res.ok)
      throw new Error(`something is wrong! , ${res.status}`); //403
    return res.json();
  });
};

const whereAmI = function (latitude, longitude) {
  getJSON(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`); //message You are in ...

      return getJSON(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err.message}`));
};*/
/*
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/
//-----------------------------------------------------------------------------------//

const whereAmI2 = function (lat, long) {
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
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

    .then(data => {
      renderCountry(data[0]);
    })

    .catch(err => console.error(err)); //Handle the erro "Problem with geocoding 403"
};

whereAmI2(52.508, 13.381);
whereAmI2(52.508, 13.381);
whereAmI2(19.037, 72.873);
whereAmI2(-33.933, 18.474);

btn.addEventListener('click', whereAmI2);

/* 

CHALLENGE 2

Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

*/
