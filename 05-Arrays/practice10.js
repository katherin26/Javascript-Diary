//NOTE: Iterate over the array of objects and change the patient name to Upercase.

let patients = [
  {
    name: 'John',
    temp: 38,
  },
  {
    name: 'Eva',
    temp: 39,
  },
  {
    name: 'Ocelot',
    temp: 40,
  },
  {
    name: 'Snake',
    temp: 20,
  },
];

function toUpperCase(arr) {
  let newObj = arr.map(function (el) {
    let clone = { ...el };
    console.log(clone);
    clone.name = clone.name.toUpperCase();
    return clone;
  });
  return newObj;
}

console.log(toUpperCase(patients));
/*{ name: 'John', temp: 38 }
{ name: 'Eva', temp: 39 }
{ name: 'Ocelot', temp: 40 }
{ name: 'Snake', temp: 20 }
[
  { name: 'JOHN', temp: 38 },
  { name: 'EVA', temp: 39 },
  { name: 'OCELOT', temp: 40 },
  { name: 'SNAKE', temp: 20 }
] */
