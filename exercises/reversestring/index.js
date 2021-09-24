// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {
  /**
    Using Array Method
    return str.split("").reverse().join("");
  */

  /**
      Using For Loop Method
      let reversed = "";
      for (let character of str) {
        reversed = character + reversed;
      }
  */

  /**
      Using Reduce Function
   */
  return str.split("").reduce((rev, char) => char + rev, "");
};

module.exports = reverse;
