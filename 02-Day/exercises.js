/**Exercise: Level 1
 *< Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
 *< Print the string on the browser console using console.log()
 *< Print the length of the string on the browser console using console.log()
 *< Change all the string characters to capital letters using toUpperCase() method
 *< Change all the string characters to lowercase letters using toLowerCase() method
 *< Cut (slice) out the first word of the string using substr() or substring() method
 *< Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
 *< Check if the string contains a word Script using includes() method
 *< Split the string into an array using split() method
 *< Split the string 30 Days Of JavaScript at the space using split() method
 *< 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
 *< Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
 *< What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
 *< What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
 *< Use indexOf to determine the position of the first occurrence of 'a' in 30 Days Of JavaScript
 *< Use lastIndexOf to determine the position of the last occurrence of 'a' in 30 Days Of JavaScript.
 *< Use indexOf to find the position of the first occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because because is a conjunction'
 *< Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
 *< Use search() to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
 *< Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
 *< Use startsWith() method with the string 30 Days Of JavaScript and make the result true
 *< Use endsWith() method with the string 30 Days Of JavaScript and make the result true
 *< Use match() method to find all the a’s in 30 Days Of JavaScript
 *< Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
 *< Use repeat() method to print 30 Days Of JavaScript 2 times
 */

let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 2))
console.log(challenge.substr(3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

let challenge02 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(challenge02.split(', '))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let challenge03 = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge03.indexOf('because'))
console.log(challenge03.lastIndexOf('because'))
console.log(challenge03.search('because'))

let challenge04 = ' 30 Days Of JavaScript '
console.log(challenge04.trim())

console.log(challenge.startsWith(30))
console.log(challenge.endsWith('JavaScript'))
//let pattern = /a/gi -> /-/ g, buscar en toda la cadena. i no distinguir entre Mayus y minus
console.log(challenge.match(/a/gi))

let challenge05 = '30 Days of '
let challenge06 = 'JavaScript'
console.log(challenge05.concat(challenge06))

console.log(challenge.repeat(2))

//Exercise: Level 2

//01
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

// 02
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

// 03
let num = '10'
let realNum = 10
console.log(typeof num == typeof realNum)
console.log(typeof +num == typeof realNum)
//let numInt = +num
//console.log(typeof numInt == typeof realNum)


console.log(parseFloat('9.8') == realNum)
console.log(Math.round(parseFloat('9.8')) == realNum) 

let exe01 = 'python'
let exe02 = 'jargon'
console.log(exe01.includes('on'), exe02.includes('on'))

let exe03 = `I hope this course is not full of jargon.`
console.log(exe03.includes('jargon'))

console.log(Math.floor(Math.random()*101))
console.log(Math.floor(Math.random()*101))
