//Casting

/**String to Int
 *parseInt()
 *Number()
 *Plus sing(+)
 */

let num = '10'
let numInt = parseInt(num)
console.log(`${numInt} es un ${typeof numInt}`) //number
console.log(`${num} es un ${typeof num}`) //string

let num02 = '20'
let numInt02 = Number(num02);
console.log(`${numInt02} es un ${typeof numInt02}`) //number

let num03 = '30'
let numInt03 = +num03
console.log(`${numInt03} es un ${typeof numInt03}`) //number

/**String to Float
 *parseFloat()
 *Number()
 *Plus sing(+)
 */

let num04 = '3.14'
let numFloat04 = parseFloat(num04)
console.log(`${numFloat04} es un ${typeof numFloat04}`) //number

let num05 = '5.55'
let numFloat05 = Number(num05)
console.log(`${numFloat05} es un ${typeof numFloat05}`) //number

let num06 = '98.64'
let numFloat06 = +num06
console.log(`${numFloat06} es un ${typeof numFloat06}`) //number

//Float to Int
let num07 = '7.98'
let numToInt = parseInt(num07)
console.log(numToInt, typeof numToInt)
