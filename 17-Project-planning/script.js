'use strict';

//TITTLE: GEOLOCATION API

/*Is called an API because it is in fact , a browser just like for example , internationalization or timers
or anything that the browser give us*/

/*this function  takes as an input two callback functions and the first one is a callback function that will
be called on success, so whenever the browser successfully got the coordinates of the current position of the user
and to second callback is the Error Callback which is the one that is gonna be called when there happened an error
while getting the coordinates*/

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      //console.log(latitude, longitude);
      // With this coordinates will be of course to load the map and the center that map in the position
      //create a link
      console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
    },
    function () {
      alert('Could not get your position!');
    }
  );
