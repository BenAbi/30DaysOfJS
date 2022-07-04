// Los numeros pueden ser enteros y decimales. Estos pueden hacer todas las operaciones aritméticas.

let age = 34
const gravity = 9.81
let mass = 80
const PI = 3.14

const boilingPoint = 100
const bodyTemp = 36.6
console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);

/** Math Object
 * Math.round -> Redondea el valor al numero más cercano
 * Math.floor -> Redondea hacia abajo
 * Math.ceil -> Redonde hacia arriba
 * Math.min -> Devuelve el valor minimo
 * Math.max -> Devuelve el valor MAXIMO
 * Math.random -> Genera un numero random entre el 0 y 0.999999
 * Math.abs -> Valor absoluto
 * Potencias
 * Math.sqrt -> Raíz cuadrada
 * Math.pow -> Exponente: Math.pow(base, exponente)
 * Logaritmos
 * Math.E -> Base de LN, Euler
 * Math.log -> Devuelve el logaritmo natural con base E de x, Math.log(x)
 * Math.LN# -> Devuelve el logaritmo natural de valores. Math.LN2 (logaritmo natural de 2)
 * Trigonometría
 * Math.sin -> Seno
 * Math.cos -> Coseno
 */

let randomNum = Math.random(); // Numero random entre 0 y 0.9999
let randomNum10 = Math.floor(Math.random()*11); // Genera de forma aleatoria numeros del 0 al 10, con 9 oportunidades en cada opción.
console.log(randomNum, randomNum10);