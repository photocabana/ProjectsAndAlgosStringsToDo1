// Strings To Do 1
// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)


// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// Examples:
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"


// function removeBlanks(str) {
//     return str.replace(/\s/g, "")
// }

// const blanksString = "A m I  go i n g t o tak e a na p  ?"
// const result = removeBlanks(blanksString)
// console.log(result)



// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680


// function stringWithDigits(givenString) {
//     let result = ""
//     for (let i = 0; i < givenString.length; i++) {
//         const char = givenString.charAt(i);
//         if (!isNaN(Number(char))) {
//             result += char;
//         }
//     }
//     return result ? Number(result) : 0;
// }

// console.log(stringWithDigits("dfjj86erfd7dsff5kiu3i0iiu9"))
// console.log(stringWithDigits("wdf8gth6yjk7ss5v3wer0thp9jhy"))



// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".


// function acronym(givenString) {
//     const words = givenString.split(' ')
//     let result = ''

//     for (let word of words) {
//         if (word !== '') {
//             result += word[0].toUpperCase()
//         }
//     }
//     return result;
// }

// console.log(acronym(" thank god its friday "))
// console.log(acronym(" its ten oclock, do you know where your children are? "))
// console.log(acronym(" new kids on the block "))




// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 
// Examples:
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11


// function countNonSpaces(givenString) {
//     const removeSpaces = givenString.split(' ').join('')
//     return removeSpaces.length;
// }

// console.log(countNonSpaces(" I am a little teapot short and stout "))
// console.log(countNonSpaces(" Here is my handle here is my spout "))



// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']


// function removeShorterStrings(arr, minLength) {
//     return arr.filter(str => str.length >= minLength)
// }

// console.log(removeShorterStrings(['no sleep', 'yet', 'till brooklyn', 'no', 'cold', 'wake'], 5))
// console.log(removeShorterStrings(['run', 'coffee', 'time', 'every', 'in', 'the', 'morning'], 4))