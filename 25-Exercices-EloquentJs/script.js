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
