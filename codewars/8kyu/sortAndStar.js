// Description: [sort it alphabetically and then return the first value.The returned value must be a string, and have "***" between each of its letters.]
function twoSort(s) {
//check if the array is empty or null
  if (!s || s.length === 0 ){
    return " "
  }
s.sort()
  return s[0].split('').join('***')
}
// Declare an empty array
const word = []
// Now call the function with the empty array
const alphabeticalWords = twoSort(word)
console.log(alphabeticalWords) // Output will be "" (empty string) because the array is empty