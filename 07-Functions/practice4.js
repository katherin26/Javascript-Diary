//Exercise with objects inside arrays.

const suspectArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image:
      'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green',
  },
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white',
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image:
      'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple',
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red',
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description:
      'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue',
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description:
      'He is a former football player who tries to get by on his former glory',
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow',
  },
];

const weaponsArray = [
  {
    name: 'rope',
    weight: 10,
  },
  {
    name: 'knife',
    weight: 8,
  },
  {
    name: 'candelstick',
    weight: 2,
  },
  {
    name: 'dumbbell',
    weight: 30,
  },
  {
    name: 'poison',
    weight: 2,
  },
  {
    name: 'axe',
    weight: 15,
  },
  {
    name: 'bat',
    weight: 13,
  },
  {
    name: 'trophy',
    weight: 25,
  },
  {
    name: 'pistol',
    weight: 20,
  },
];

const roomsArray = [
  {
    name: 'Dining Room',
  },
  {
    name: 'Conservatory',
  },
  {
    name: 'Kitchen',
  },
  {
    name: 'Study',
  },
  {
    name: 'Library',
  },
  {
    name: 'Billiard Room',
  },
  {
    name: 'Lounge',
  },
  {
    name: 'Ballroom',
  },
  {
    name: 'Hall',
  },
  {
    name: 'Spa',
  },
  {
    name: 'Living Room',
  },
  {
    name: 'Observatory',
  },
  {
    name: 'Theater',
  },
  {
    name: 'Guest House',
  },
  {
    name: 'Patio',
  },
];

// ITERATION 2

function selectRandom(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomValue = array[randomIndex];
  return randomValue;
}

function pickMystery() {
  return {
    room: selectRandom(roomsArray),
    suspect: selectRandom(suspectArray),
    weapon: selectRandom(weaponsArray),
  };
}

//Iteration 3

let mysteryEnvelope = pickMystery();

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the
    ${envelope.weapon.name} ${envelope.room.name}`;
}

let mysterySolution = revealMystery(mysteryEnvelope);
console.log(mysterySolution);

//NOTE: Removes vowels from a string with replace.

function disemvowel(str) {
  let newText = str.replace(/[aeiou]/gi, '');
  return newText;
}

console.log(disemvowel('This website is for workers =D!!!'));

/*NOTE: Create a orderAlphabetically() function, that receives an array and returns an array of first 3 titles, Alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 2 movies, return all of them.*/

let movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h',
    genre: ['Crime', 'Drama'],
    rate: 9.3,
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: 9.2,
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: 9,
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    rate: 9,
  },
];

function orderAlphabetically(arr) {
  let clone = [...arr];
  let result = clone
    .sort((mov1, mov2) => mov1.title.localeCompare(mov2.title))
    .map(mov => mov.title)
    .slice(0, 2);

  return result;
}

console.log(orderAlphabetically(movies));
