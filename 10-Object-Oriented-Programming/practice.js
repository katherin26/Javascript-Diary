'use strict';

/*NOTE: DATE CONSTRUCTOR 
Consider the following code block which calls the Date constructor with 2 type of values. In a US environment, what 
will be the output of console.log?
*/

let date1 = new Date('2019,1,1').toLocaleDateString();
let date2 = new Date(2019, 1, 1).toLocaleDateString();
console.log(date1, date2); //1/1/2019 2/1/2019

/* The Date constructor, new Date(), creates a date object at given date or the current date if no date is given
.It can be called in many ways. If the Date constructor is passed as a string, JS will attempt to interpret the 
string as a date. In this case, "2019,1,1" is interpreted as January 1,2019. If the Date constructor is passed 
three numbers, the first value will be interpreted as the year, the second value the month, and the third the day.
The catch here in JS starts in month indexing at 0, so month 1 is February.*/

/*NOTE: Creating an Object */

//Method 1 : Literal Object.

let robot = {
  name: 'Lucia',
  age: 5,
};

console.log(robot.name); //This prints robot's name = Lucia.
