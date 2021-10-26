/*NOTE: Convert the num value to a string value and log to the console 
the result with dash symbol between the number(78-656-2-4998)*/

let num = 786999443322;
let str = num.toString();
let result = [str[0]];

for (let x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}

console.log(result.join(''));
