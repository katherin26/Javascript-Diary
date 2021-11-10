/*NOTE:  What is the longest name??*/

let persons = ['kaoru', 'kei', 'kii', 'kou', 'kuo'];

function getLongestName(names) {
  let longestNameIndex;

  let maxNameLength = 0;
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > maxNameLength) {
      longestNameIndex = i;
      maxNameLength = names[i].length;
    }
  }
  return names[longestNameIndex];
}

console.log(getLongestName(persons)); //kaoru

//Now using For Of

let pets = ['chichi', 'marcelo', 'pinky'];

function getLongestNames(names) {
  let longestNameIndex;

  let maxNameLength = 0;
  for (let [index, name] of names.entries()) {
    if (name.length > maxNameLength) {
      longestNameIndex = index;
      maxNameLength = name.length;
    }
  }
  return names[longestNameIndex];
}
console.log(getLongestNames(pets)); //marcelo
