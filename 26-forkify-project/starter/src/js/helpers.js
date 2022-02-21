/*
The goal of this module is to contain a couple of functions that we reuse over and over in our project
for start: we are gonna create a function which will get JSON , Basically a function which encapsulates
all of the try and catch and some of the error handling.
This function is going to be very similar to what we did in the async JS section so it's gonna be an 
async function which will basically do the fetching and also converting to JSON all in one step, with
this we abstract all this functionality into one nice function that we can then use all over our pro-
ject and probably, we will just use this actually in our model in this case, but it's still good to
have this function in this kind of central place.
*/

import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}; //this function return a new promise which will reject after a certain number of seconds

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; //this data is going to be the resolved value of the promise that the getJSON function returns.
  } catch (err) {
    throw err;
  }
};

/*
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; //this data is going to be the resolved value of the promise that the getJSON function returns.
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; //this data is going to be the resolved value of the promise that the getJSON function returns.
  } catch (err) {
    throw err;
  }
};
*/
