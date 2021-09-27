// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// const getCharacterObj = (str) => {
//   let newStr = str.replace(/[^\w]/g, "").toLowerCase();
//   const characters = {};
//   for (let char of newStr) {
//     characters[char] = characters[char] + 1 || 1;
//   }
//   return characters;
// };

const cleanString = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

const anagrams = (stringA, stringB) => {
  /**
   * Solution 1
   */
  // const objectA = getCharacterObj(stringA);
  // const objectB = getCharacterObj(stringB);

  // if (Object.keys(objectA).length !== Object.keys(objectB).length) {
  //   return false;
  // }
  // for (let char in objectA) {
  //   if (objectA[char] !== objectB[char]) {
  //     return false;
  //   }
  // }
  // return true;

  /**
   * Solution 2
   */
  return cleanString(stringA) === cleanString(stringB);
};

module.exports = anagrams;
