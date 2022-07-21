// Booleans (true or false)
console.log('03 Day: Boolean')

/** Valores verdaderos
 * Todos los numeros (positivos y negativos) son verdaderos excepto el CERO 0
 * Todas las cadenas de texto excepto las vacias ('')
 * El boolean true (verdadero)
 * 
 ** Valores falsos
 * 0
 * 0n
 * null
 * undefined
 * NaN
 * El boolean false (falso)
 * Cadena de texto vacía ('', "", ``)
*/

let nombre
console.log(nombre) //undefined - porque no se le asigno ningún valor

let empty = null
console.log(empty) //null - sin valor

//Operadores
nombre = 'Abraham'
let pais = 'Venezuela'

/** Operadores:
 * =   | x = y   | x = y      | el dato 'y' se almacena en 'x'
 * +=  | x += y  | x = x + y  | el resultado de x + y, se almacena en x  (Suma)
 * -=  | x -= y  | x = x - y  | el resultado de x - y, se almacena en x  (Resta)
 * *=  | x *= y  | x = x * y  | el resultado de x * y, se almacena en x  (Multiplicacion)
 * /=  | x /= y  | x = x / y  | el resultado de x / y, se almacena en x  (Division)
 * %=  | x %= y  | x = x % y  | el resultado de x % y, se almacena en x  (Modulo)
 * **= | x **= y | x = x ** y | el resultado de x ** y, se almacena en x (Exponencial)
 */

let num01, num02
num01 = 4
num02 = 3
let sum = num01 + num02
let diff = num01 - num02
let mult = num01 * num02
let div = num01 / num02
let sobrante = num01 % num02
let powerOf = num01 ** num02
console.log(sum, diff, mult, div, sobrante, powerOf)

const PI = 3.14
let radio = 100 //medida en metro

//Vamos a calcular el area del circulo
const areaOfCircle = PI * radio**2
console.log(areaOfCircle)

const gravedad = 9.81 // m/s^2
let masa = 72 // en kilogramo

//Vamos a calcular el peso de un objeto
const peso = masa * gravedad 
console.log(peso)

const ebullicion = 100 //Temperatura en 100ºC y el punto de ebullicion del agua
const bodyTemp = 36.6 // Temp en ºC

/**Concatenar cadena de texto con numero
 * El punto de ebullicion del agua 100ºC
 * La temperatura del cuerpo 36.6 ºC
 * La gravedad de la Tierra es 9.81 m/s^2
*/

console.log(`El punto de ebullicion del agua es ${ebullicion}C.\nLa temperatura del cuerpo humano es ${bodyTemp}C.\nLa gravedad de la Tierra es ${gravedad}m/s^2.`)

/** Operador de comparacion
 * ==  | Es equivalente    | x == y
 * === | Exactamente igual | x === y
 * !=  | No igual          | x != y
 * >   | Mayor que         | x > y
 * <   | menor que         | x < y
 * >=  | Mayor o igual que | x >= y
 * <=  | menor o igual que | x <= y
 */

/**Ejemplos del uso de operadores de comparacion
 console.log(5 > 2)              // true, because 3 is greater than 2
 console.log(5 >= 2)             // true, because 3 is greater than 2
 console.log(8 < 2)              // false,  because 3 is greater than 2
 console.log(1 < 3)              // true, because 2 is less than 3
 console.log(1 <= 3)             // true, because 2 is less than 3
 console.log(6 == 2)             // false, because 3 is not equal to 2
 console.log(6 != 2)             // true, because 3 is not equal to 2
 console.log(3 == '3')           // true, compare only value
 console.log(3 === '3')          // false, compare both value and data type
 console.log(3 !== '3')          // true, compare both value and data type
 console.log(3 != 3)             // false, compare only value
 console.log(3 !== 3)            // false, compare both value and data type
 console.log(0 == false)         // true, equivalent
 console.log(0 === false)        // false, not exactly the same
 console.log(0 == '')            // true, equivalent
 console.log(0 == ' ')           // true, equivalent
 console.log(0 === '')           // false, not exactly the same
 console.log(1 == true)          // true, equivalent
 console.log(1 === true)         // false, not exactly the same
 console.log(undefined == null)  // true
 console.log(undefined === null) // false
 console.log(NaN == NaN)         // false, not equal
 console.log(NaN === NaN)        // false
 console.log(typeof NaN)         // number
 
 console.log('mango'.length == 'aguacate'.length)  // false
 console.log('mango'.length != 'aguacate'.length)  // true
 console.log('mango'.length < 'aguacate'.length)   // true
 console.log('leche'.length == 'carne'.length)      // true
 console.log('leche'.length != 'carne'.length)      // false
 console.log('tomato'.length == 'potato'.length)  // true
 console.log('python'.length > 'dragon'.length)   // false
*/
/** Operadores logicos (AND-OR-Not)
// && - Operador AND
const check = 4 > 3 && 10 > 5 // true && true -> true
console.log(check)
const check01 = 4 > 3 && 10 < 5 // true && false -> false
console.log(check01)
const check02 = 4 < 3 && 10 < 5 // false && false -> false
console.log(check02)

// || - Operador OR

const check03 = 4 > 3 || 10 > 5 // true  || true -> true
const check04 = 4 > 3 || 10 < 5 // true  || false -> true
const check05 = 4 < 3 || 10 < 5 // false || false -> false

// ! - Operación negación|inverso

let check06 = 4 > 3         // true
let check07 = !(4 > 3)      // false
let isLightOn = true
let isLightOff = !isLightOn // false
console.log(isLightOn)          
let isMarried = !false      // true
*/

// Operador de incremento
let preIncremento = 0
console.log(++preIncremento)    //1
console.log(preIncremento)      //1

let postIncremento = 0
console.log(postIncremento++)   //0
console.log(postIncremento)     //1

// Operador de decremento
let preDecremento = 0
console.log(--preDecremento)    //-1
console.log(preDecremento)      //-1

let postDecremento = 0
console.log(postDecremento--)   //0
console.log(postDecremento)     //-1

// Operadores ternarios
let lluvia = true
lluvia
? console.log('Necesitas un paraguas.')
: console.log('No necesitas paraguas.')

lluvia = false
? console.log('Necesitas un paraguas')
: console.log('No necesitas paraguas')

let num = 5
num > 0
? console.log(`${num} es un numero positivo`)
: console.log(`${num} es un numero negativo`)

num = -5
num > 0
? console.log(`${num} es un numero positivo`)
: console.log(`${num} es un numero negativo`)

// Operador con precedente, algunos ejemplos

console.log(3>2>1)      // false. Porque 3>2 es true. (true>1) true = 1 y 1 > 1 es false
console.log(3>(2>1))    // true. Porque 2>1 es true y true = 1. 3>1 es true.
console.log((-1)**2)    // Sintaxis correcta. No se puede escribir '-1**2'

/**Window methods (ventana emergente)
 * alert()      ventana con un botón de 'OK'                alert('message')
 * prompt()     solicita datos.                             prompt('required text', 'optional text')
 * confirm()    ventana con dos opciones 'OK' (true)        confirm('text')
 *                                       'Cancel' (false)
*/

//alert('Bienvenido a 30DJS')
//prompt('texto obligatorio', 'texto opcional')
//const cookies = confirm(`Quieres cookies?`)
//console.log('El usuario quiere cookies? '+cookies)

/**Date Object - El tiempo es un dato importante para realizar eventos
 * getFullYear()        Recoge el AÑO un dato de cuatro digitos (yyyy)
 * getMonth()           Recoge el MES un numero del (0-11)
 * getDate()            Obtiene el día un numero del (1-31)
 * getHours()           Obtiene la hora (0-23)
 * getMinutes()         Recoge el minuto (0-59)
 * getSeconds()         Recoge el segundo (0-59)
 * getMilliseconds()    Obtiene el milisegundo (0-999)
 * getTime()            Obtiene el tiempo (milisegundos desde enero 1, 1970)
 * getDay()             Recoge el dia de la semana como numero (0-6)
 */

//Creando el objeto de tiempo
const now = new Date()
console.log('Date(): '+now)
console.log('now.getFullYear(): '+now.getFullYear())
console.log('now.getMonth(): '+now.getMonth())
console.log('now.getDate(): '+now.getDate())
console.log('now.getHours(): '+now.getHours())
console.log('now.getMinutes(): '+now.getMinutes())
console.log('now.getSeconds(): '+now.getSeconds())
console.log('now.getMilliseconds(): '+now.getMilliseconds())
console.log('now.getTime(): '+now.getTime())
console.log('now.getDay(): '+now.getDay())

const year = now.getFullYear()
const mes = now.getMonth()
const dia = now.getDate()
const hora = now.getHours()
const min = now.getMinutes()
//alert(`${dia}/${mes}/${year}  ${hora}:${min}`)