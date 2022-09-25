//+ Code a function that says whether a word is a palindrome


//+ So 
//? word => str, no empty str, no !, no nums, no funny biz, no caps, 1 word

//? return true || false

//? racecar => true
//? bob => true
//? tacos => false

const isPalindrome = word => word === word.split('').reverse().join('')

// function isPalindrome(word){
  //? word => reverse the word - split, reverse, join
//   let reversedWord = word.split('').reverse().join('')
  //? revWord === word ? true : false
//   return reversedWord === word
// }




console.log(isPalindrome('racecar'), true)
console.log(isPalindrome('bob'), true)
console.log(isPalindrome('tacos'), false)
console.log(isPalindrome('nathan'), false)
console.log(isPalindrome('natan'), true)