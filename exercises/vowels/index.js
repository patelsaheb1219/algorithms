// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  /**
   * Solution 1 | Iterative Solution
   */
  // let vowels = ['a', 'e', 'i', 'o', 'u'];
  // let count = 0;
  // for (let char of str.toLowerCase()) {
  //   if (vowels.includes(char)) {
  //     count++;
  //   }
  // }
  // return count;

  /**
   * Solution 2
   */
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0
}

module.exports = vowels;
