function isPalindrome(word) {
  let lowerCaseWord = word.toLowerCase()
  let reversedWord = lowerCaseWord.split('').reverse().join('');
  return lowerCaseWord === reversedWord
}

/* 
  write a function called isPalindome
  change the word or statement to lowercase
  split the word to obtain all the letters in an array
  next is to reverse the order of the letters in a new array
  next is to join the elements in a string
  finally, to determine whether the word is a palindrone or not
*/

/*
  my solution is a function, isPalindrone that takes a string as an argument
  in the function, the string is converted to lowercase
  the lowercase string is held in a variable, lowerCaseWord
  the string is then converted to an array of letters using split(' ')
  the array of letters is then reversed using reverse()
  the reversed array of letters is then converted back to a string using join ()
  the reversed string is stored in the variable lowerCaseWord
  finally, a comparison of the two strings, lowerCaseWord and reversedWord to determine true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
