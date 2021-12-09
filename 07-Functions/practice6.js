/*NOTE: Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each other and
preserving the original order of elements. */

//SOLUTION WITH FUNCTION

function unique_in_order(sequence) {
  let arrToFilter = Array.isArray(sequence) ? sequence : sequence.split('');

  let filtered = arrToFilter.filter(function (word, index) {
    if (arrToFilter.indexOf(word) === index) {
      return true;
    } else {
      return false;
    }
  });
  return filtered;
}

console.log(unique_in_order('AAAABBBCCDAABBB'));
