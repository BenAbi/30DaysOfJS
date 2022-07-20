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

console.log(Math.floor(Math.random()*101)) // 0 to 100

console.log(Math.floor(Math.random()*51) + 50)
//console.log(Math.floor((0.94 * 51) + 50)) - Math.floor((Math.random * (max-min)+1) + min)

console.log(Math.floor(Math.random()*255) + 1)


// JavaScript
let randomJS = Math.floor(Math.random()*challenge06.length)
console.log(randomJS)
console.log(challenge06.charAt(randomJS))

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

let text = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(text)
console.log(text.search('porque'))
console.log(text.substr(35, 21))

// Exercise: level 3

// 01
let text02 = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.'

//console.log(text02.match('amor'))
//console.log(text02.split('amor').length - 1)
let exp02 = /amor/gi
console.log(text02.match(exp02))


// 02
let exp = /porque/gi
console.log(text.match(exp))

// 03 - Clean and find the most frequent
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let fword = /%|#|@|&|\$/g
newSentence = sentence.replace(fword,'')
console.log(newSentence)
console.log('"%" they were ' + sentence.match(/%/g).length + ' times in the sentence.')
console.log('"#" they were ' + sentence.match(/#/g).length + ' times in the sentence.')
console.log('"@" they were ' + sentence.match(/@/g).length + ' times in the sentence.')
console.log('"&" they were ' + sentence.match(/&/g).length + ' times in the sentence.')
console.log('"$" they were ' + sentence.match(/\$/g).length + ' times in the sentence.')

/* Experiment
fword = /@/g
newSentence = newSentence.replace(fword,'')
console.log(newSentence)
fword = /$/g
newSentence = newSentence.replace(fword,'')
console.log(newSentence)
fword = /#/g
newSentence = newSentence.replace(fword,'')
console.log(newSentence)
fword = /&/g
newSentence = newSentence.replace(fword,'')
console.log(newSentence)

console.log(sentence.match(/%/gi))
console.log(sentence.match(/@/gi))
console.log(sentence.match(/#/gi))
console.log(sentence.match(/&/gi))
console.log(sentence.replace((/#/gi,/%/gi), ''))
console.log(sentence.replace(/%/gi, ''))
*/

// 04
let text03 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(text03.match(/\d+/g))
newText03 = text03.match(/\d+/g)
let totalIncome = Number(newText03[0]*12) + Number(newText03[1]) + Number(newText03[2]*12)
console.log('Total annual income is ' + totalIncome)