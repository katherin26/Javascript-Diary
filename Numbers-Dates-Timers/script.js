'use strict';

const account1 = {
  owner: 'JUPITER NEP',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'MARS LUN',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

//TITTLE: CONVERTING AND CHECKING NUMBERS

/*NOTE: All numbers are presented internally as floating point numbers, So basically , always as decimals .
Also , numbers are represented internally  in a 64 base 2 format , So that means that numbers are always 
stored in a binary format*/

console.log(23 === 23.0); //true

/*Base 10 - 0 to 9
1/10 = 0.1 
3/10 = 3.333*/

/*Binary base 2 - 0 1 */

console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

//CONVERSION
console.log(Number('23')); //23
//+ = this works because when Javascript sees the plus operator, it will do type coercion
console.log(+'23'); //23

//PARSING
console.log(Number.parseInt('30px')); //30 = The string needs to start with a number
console.log(Number.parseInt('e23')); //NaN

console.log(Number.parseFloat('2.5rem')); //2.5
console.log(Number.parseFloat('2.5rem')); //2.5

//isNaN = Check if value is NaN

console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(20 / 0)); //false//

//isFinite = Checking if value is number.

console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(20 / 0)); //false

//isInteger

console.log(Number.isInteger(23)); //True
console.log(Number.isInteger(23.0)); //True
console.log(Number.isInteger(23 / 0)); //False

//TITTLE: MATH AND ROUNDING

//NOTE: SQUARE ROOT

console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

//NOTE: MAXIMUN VALUE

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

//NOTE: MATH MIN
console.log(Math.min(5, 18, 23, 11, 2)); //2

//NOTE: MATH PI
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592

//NOTE: MATH TRUNC AND MATH RANDOM
console.log(Math.trunc(Math.random() * 6) + 1); //6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
//0...1 -> 0...(max - min) -> min ...max
console.log(randomInt(15, 20));
/*Why (max-min) = It is because , it gives us a number between zero and one so Math.random is between 0 and 1
So if we multiply this by max - min then we get a number between 0 and max - min and now if we add min to all
of this so the minimun value then we get min to max minus min plus min, So we added min on both sides here
basically of the equation and so then we can cancel this minus min plus min , and we end up with a range
between the minimun and the maximun value that we specified .*/

//ROUNDING INTEGERS
//Math Round
console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24
//Math Ceil
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24
//Math Floor
console.log(Math.floor(23.3)); //23
console.log(Math.floor('23.9')); //23
//Math Trunc
console.log(Math.trunc(23.3)); //23

//When is Math.trunc and Math.ceil
//NOTE: Math.trunc and Math.ceil = Both cut off the decimal part when we are dealing with positive numbers.

//When is Math.trunc or Math.floor
console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24
//NOTE: floor now gets rounded to -24, Because with negative numbers rounding works the other way around
//And so actually a floor is a little bit better than trunc because it works in all situations.

//ROUNDING DECIMALS
console.log((2.7).toFixed(0)); //3 = String
console.log((2.7).toFixed(3)); //2.700 = String
console.log((2.7).toFixed(2)); //2.70 = String
console.log(+(2.7).toFixed(2)); //2.7 = Number = because we add (+)

/*NOTE: This works in a similar way than the string methods, this is a number , so it's a primitive
and primitives actually don't have methods and so behind the scenes , Javascript will do boxing and boxing 
is basically transform this (2.7) to a number object , then call the method on that object and then once 
the operation is finished it will convert it back to a primitive. */

//TITTLE: THE REMAINDER OPERATOR

console.log(5 % 2); //1

console.log(5 / 2); //2.5 // 5 = 2 *2 + 1 ===> 1 is the remainder

console.log(8 % 3); //2
console.log(8 / 3); //2.6 // 8 = 2 * 3 + 2

console.log(6 % 2); //0
console.log(6 / 2); //3
console.log(7 % 2); //1
console.log(7 / 2); //3.5

const isEven = n => n % 2 === 0;
console.log(isEven(8)); //true
console.log(isEven(23)); //false
console.log(isEven(514)); //true

//TITTLE: BIGINT = It can be used to store numbers as large as we want.

console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

console.log(455554512258466456464649464646464646465464646n); //n = This n here basically transforms a
//regular number into a BigInt number
console.log(BigInt(455554512258));

//NOTE: OPERATIONS

console.log(10000n + 10000n);
console.log(16165646646464654646464n * 10000000000n);

const huge = 66456466556546464654646546n;
const num = 23;
console.log(huge * BigInt(num));

//NOTE: EXCEPTIONS
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); //bigint
console.log(20n == 20); //true

console.log(huge + 'is REALLY big!!!');

//NOTE: DIVISIONS
console.log(10n / 3n); //3n;
console.log(10 / 3); //3.33

//TITTLE: CREATING DATES

//NOTE: 1) They all use the new date constructor function, but they can accept different parameters.

const now = new Date();
console.log(now); //Tue Aug 24 2021 16:48:46 GMT-0400 (Eastern Daylight Time)

//NOTE: 2) Next up the second way is to parse the date from a date string

console.log(new Date('Tue Aug 24 2021 16:48:46 ')); //Tue Aug 24 2021 16:48:46 GMT-0400 (Eastern Daylight Time)
console.log(new Date('December 24, 2015')); //Thu Dec 24 2015 00:00:00 GMT-0500 (Eastern Standard Time)
console.log(new Date(account1.movementsDates[0])); // Mon Nov 18 2019 16:31:17 GMT-0500 (Eastern Standard Time)
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT-0500 (Eastern Standard Time)
//NOTE: November is actually the month 11 , and so that means the month here is zero based.

console.log(new Date(0)); //Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //Sat Jan 03 1970 19:00:00 GMT-0500 (Eastern Standard Time)

//WORKING WITH DATES = METHODS

const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //Thu Nov 19 2037 15:23:00 GMT-0500 (Eastern Standard Time)
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); //10 ===> 0 based
console.log(future.getDate()); //19 ==>day
console.log(future.getDay()); //4 ===> day of the week 0 is sunday and four is thursday
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T20:23:00.000Z
console.log(future.getTime()); // 2142274980000

console.log(Date.now()); // 1629840536077

future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040 15:23:00 GMT-0500 (Eastern Standard Time)

//TITTLE: OPERATIONS WITH DATES
console.log(`OPERATIONS WITH DATES------------------------`);

const future2 = new Date(2037, 10, 19, 15, 23);
console.log(+future2); // 2142274980000

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 10, 19), new Date(2037, 10, 24));
console.log(days1); //5

//TITTLE: INTERNATIONALIZING DATES (INTL)
//TITTLE: INTERNATIONALIZING NUMBERS (INTL)

/*EXPERIMENTING API //INTL
 const now = new Date();
 //all we need to pass into this function here is a so-called locale string and this locale,
 //is usually the language and the - the country en-US, all this creates a new formatter,
 //and then on that formatter , we can call dot format (.format) and then here we actually pass in the date
 //that we want to format(now)
 const options = {
   hour: 'numeric',
   minute: 'numeric',
   day: 'numeric',
   month: 'numeric', //long=august / 2-digit= 08 / 'numeric' = 8
   year: 'numeric',
   //weekday: 'long', //short: wed/ narrow:W / long: wednesday
 }; // THIS IS BROWSER TIME

 const locale = navigator.language;
 console.log(locale); //'en-US
  labelDate.textContent = new Intl.DateTimeFormat(
   currentAccount.locale,
   options
 ).format(now);

 const now = new Date();
 const day = `${now.getDate()}`.padStart(2, 0);
 const month = `${now.getMonth() + 1}`.padStart(2, 0);
 const year = now.getFullYear();
 const hour = `${now.getHours()}`.padStart(2, 0);
 const min = `${now.getMinutes()}`.padStart(2.0);
 labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;*/

const numIntl = 3884764.23;

const options = {
  style: 'currency', //unit - percent - currency
  unit: 'mile-per-hour', //celsius
  currency: 'EUR',
  //useGrouping: false,
};

console.log('US:', new Intl.NumberFormat('en-US', options).format(numIntl)); //US: 3,884,764.23 mph
console.log(
  'Germany:',
  new Intl.NumberFormat('de-DE', options).format(numIntl)
); //Germany: 3.884.764,23 mi/h
console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(numIntl)); //Syria: ٣٬٨٨٤٬٧٦٤٫٢٣
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(numIntl)
); //en-US 3,884,764.23 mph
