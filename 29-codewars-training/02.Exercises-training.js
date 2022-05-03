/*Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.*/

function getVolumeOfCuboid(length, width, height) {
  return length * width * height;
}

console.log(getVolumeOfCuboid(1, 2, 2));

/*Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.*/

const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

console.log(console.log(isDivideBy(-12, 6, -2))); //true

function isDivideBy2(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivideBy2(-12, 6, -2));

/*Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
  
  [Make sure you type the exact thing I wrote or the program may not execute properly]*/

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet(`Bryan`));

function checkForFactor(base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}
