//NOTE: The While Loop.

let number = 0;

while (number <= 12) {
  console.log(number);
  number = number + 2;
}
/*0 2 4 6 8 10 12 */

//The while Loop.

let result = 1;
let counter = 0;

while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(result); //1024

/*NOTE: Write a loop that makes calls to console.log to output a triangle */

for (let i = '#'; i.length < 12; i += '#') {
  console.log(i);
}

/*
   #
   ##
   ###
   ####
   #####
   ######
   #######
   ########
   #########
   ##########
   ###########
   
    */

/*NOTE:  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 

For numbers divisible by 3, print "Fizz" instead of the number, and 

For numbers divisible by 5 and not 3 print "buzz" instead . 

When you have that working modify your program to print "fizzBuzz" for numbers divisible by only one of those.*/

for (let i = 0; i <= 100; i++) {
  let output = '';

  if (i % 3 == 0) output += 'Fizz';
  if (i % 5 == 0) output += 'Buzz';
  console.log(`${i} ${output}`);
}
