//Date() = When called as a function, returns a string representation of the current date and time, exactly as new Date().toString.

const date = Date();
console.log(date.toString());
//Fri Jan 14 2022 22:18:25 GMT+0000 (Coordinated Universal Time)

//new Date() = When called as a constructor, returns a new Date object.

const date1 = new Date();
console.log(date1.toUTCString());
//Fri, 14 Jan 2022 22:14:39 GMT

//Using a function called today().
function today() {
  return new Date().toUTCString();
}

console.log(today());

////Fri, 14 Jan 2022 22:14:39 GMT
