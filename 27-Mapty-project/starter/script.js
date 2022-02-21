'use strict';
//TITTLE: GEOLOCATION API
/*Is called an API because it is in fact , a browser just like for example , internationalization or timers
or anything that the browser give us*/

/*this function  takes as an input two Callback functions and the first one is a callback function that will
be called on success, so whenever the browser successfully got the coordinates of the current position of the user
and to second callback is the Error Callback which is the one that is gonna be called when there happened an error
while getting the coordinates*/

/*map and mapEvent is in the global scope, but we want everything that is realted to our application in this App 
class know we are gonna define the map and map event as properties of the object and for that, let's actually use 
  a private class field (#). So both of them will now become private instance properties that are gonna be present on 
  all the instances created through this class
  */
//let map, mapEvent; //Global variables

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10); //Date.now() = current time stamp
  //This one will take in the data that is common to both the workouts
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; //in km
    this.duration = duration; //in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May',
     'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()} ${this.type.slice(1)}
     on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription(); //this constructor method will get access to all the methods of the parent class.
  }
  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling'; //Will now be a property that's gonna be available on all the instances

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    //km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

//TEST
/*
const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);

console.log(run1);
console.log(cycling1);*/

//TITTLE: APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    //Get user's position
    this._getPosition(); //This code would get executed, right at a point where the application loads.
    //Get data from local storage
    this._getLocalStorage();
    //Attach event handlers
    form.addEventListener(
      'submit',
      this._newWorkout.bind(this)
    ); /*this._newWorkout is an event handler function it's a
    function that's gonna be called by an event listener  and the this keyword is gonna point to form and 
    no longer to the App object and we need to fix that using bind()*/

    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position!');
        }
      );
  }

  _loadMap(position) {
    //console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    //console.log(latitude, longitude);
    // With this coordinates will be of course to load the map and the center that map in the position
    //create a link
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    console.log(this);
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel); //13 is the zoom
    //"Map is in the html , L = is the main function that Leaflet gives us as an entry point  and that L
    //has a couple  of methods that we can use and one of them is .map method  the other one is tileLayer
    //where we actually need to define the tiles of our map and .marker method . This should probably already
    //render a map on our page it will do that in the coordinates  (setView) "

    //TileLayer = leaflet works with all other kinds of maps as well, also we can change the appearance of our
    //map , we can change org for fr/hot

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    /*
  L.marker(coords)
  .addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();
});*/

    //We can add an event listener = on()
    // Handling clicks on Map
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    console.log(`mapEvent`);
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    //SUBTITTLE: EMPTY INPUTS
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      '';
    form.style.display = 'none';
    form.classList.remove('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000); //display the form in 1s.
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    /*This will loop over the array and then each of them it will check whether the number is finite or not.
    and then in the end , The every method will only return true if this value here (Number.isFinite(inp)) was
    true for all elements in the array. But if only one of these values here was not finite , so if the result
    here was false for one of the elements of the array then every will return false and so that will then be the 
    return value of this arrow function .*/

    //SUBTITTLE: Helper functions
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    //Because submitting the form for the newWorkout will create a new workaout
    e.preventDefault();

    //SUBTITTLE: CREATING A NEW WORKOUT

    //SUBTITTLE: Get data from form
    console.log(inputType);
    const type = inputType.value; //inputType.options[inputType.selectedIndex].value; // option value = "running" and value = "cycling"
    const distance = +inputDistance.value; //+ = the string to number.
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //SUBTITTLE: If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      //Check if data is valid = each of them should be a number, we will use a guard clause.
      if (
        /*
        !Number.isFinite(distance) ||
        !Number.isFinite(duration) ||
        !Number.isFinite(cadence) 
        */
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence) //Here we are inverting the condition
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
      console.log(workout);
    }

    //SUBTITTLE: If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //SUBTITTLE: Add new object to workout array
    this.#workouts.push(workout);
    console.log(workout);

    //SUBTITTLE: Render workout on map as a marker
    this._renderWorkoutMarker(workout);

    //SUBTITTLE: Render workout on list
    this._renderWorkout(workout);

    //SUBTITTLE: Hide form + Clear input fields
    this._hideForm();

    //SUBTITTLE: Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      //.setPopupContent(`${workout.distance}`)
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;

    if (workout.type === 'running')
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
      </li> 
           `;

    if (workout.type === 'cycling')
      html += `
    
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
      </li>
      `;

    form.insertAdjacentHTML('afterend', html);
  }
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout'); //essentially the opposite of a query selector.
    console.log(workoutEl); //<li class= "workout workout--running" data-id="156546546">...</li>
    //This element has data-id that I will now use to actually find the workout in the workouts array,
    //we can basically build a bridge between the user interface and the data that we have actually in
    //our application , in this case our data in the workout's array

    if (!workoutEl) return;
    //Get the workout data out of the workouts array
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);

    //Leaflet ==> setView() = need as a first argument the coordinates, the second one is the zoom level, and
    //finally we can pass in an object of options as always
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts)); //Object to string
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts')); //string to object
    console.log(data);

    if (!data) return;
    this.#workouts = data; /*This method here is gonna be executed right in the
    very beginning ,so at that point the workouts array is always gonna be empty , but if we already had some
    data in the local storage then , we will simply set that workouts array to the data we had before. */
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts'); //remove workouts from the local storage
    location.reload(); //location is a big object that contains a lot of methods and properties in the browser.
    //so one of the methods is the ability to reload the page.
  }
}
const app = new App();

/*NOTE: LOCAL STORAGE :
Is basically a place in the browser, where we can store data that will stay there even after we close the page,
So basically the data is linked to the URL on which we are using the application . Whenever there is a new 
workout, we will take the entire workouts array and store it in local storage and then whenever the page loads, 
then we will load all the workouts from the local storage, and render them on the map and also on the list
*/
/*This one doesn't need any parameters because we will simply get the workouts  from the workout property 
 so this is how we use the local storage API, we can use localStorage.setItem and then we have to give it a 
 name , so workouts and then the second argument needs to be a string that we want to store and which will be 
 associated with this key here , basically local storage is a simple key value store and we need a key which is 
 'workouts' and we need a simple value which must also be a string , but we can convert an object to a string 
 by doing this JSON.stringify() = we can convert any object in Javascript to a string, and that's it with this
 we are setting all the workouts to local storage. */
