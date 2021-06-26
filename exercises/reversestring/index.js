// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '')
}

reverse('ssdfsdf')

module.exports = reverse;

// solution 1
  // spilt string to array
  // reverse the array
  // join the array
// return str.split("").reverse().join("")

// solution 2 ( no pre defined method)
  // set empty string variable
  // using fro loop, take each character and save it in the string variable at the begining
  // let reversed = '';

  // for ( let character of str) {
  //   reversed = character + reversed;
  // }
  //  return reversed;

// solution 3: use reduce helper
    // turn the string into an array  with split function
  // use reduce
  // return str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // }, '')  