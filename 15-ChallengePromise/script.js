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
/*
whereAmI2(52.508, 13.381);
whereAmI2(52.508, 13.381);
whereAmI2(19.037, 72.873);
whereAmI2(-33.933, 18.474);*/

/* 

CHALLENGE 2

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which 
creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. 
When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. 
The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event),
reject the promise.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image 
(HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global 
  variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to
'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

//NOTE: PART 1
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img'); //create a new image.
    img.src = imgPath; // sets the .src attribute to the provided image path

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error(`Something is wrong!!`));
    });
  });
};

let currentImg;
//NOTE: PART 2
/*
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2); //This is gonna return a promise.
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(err));
*/
/* 
CHALLENGE #3

PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part
where the promise is consumed). Compare the two versions, think about the big differences, and see which one you 
like more. Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools 
Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'parallel' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
*/

//PART 1
const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log(`Image 1 loaded`);
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

loadNPause();

//PART 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl); //[img,img,img]
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
