/* Enteros: Numeros enteros (negativos, cero y positivos)
 * Ej: ...-3; -2; -1; 0; 1; 2; 3...
 * 
 * Float: Numeros decimales
 * Ej: ...-3.5; -2.25; -1.0; 0.0; 2.9; 3.5...
 * 
 * Cadenas de texto
 * "Ben Abi"
 * "Venezuela" 
 * 'JavaScript es un hermoso lenguaje de programación'.
 * "Me encanta aprender"
 * "Espero que estés disfrutando del primer día"
 * `También podemos crear una cadena usando un backtick`
 * 
 * Boolean, true or false (VERDADERO o FALSO)
 * 
 * Undefined. Indefinido, cuando una variable o funcion no devuelve nada. Devuelve undefined
 * let name;
 * console.log(name); // Undefined
 * 
 * Null. Vacío/nulo
 * 
 */

//Para comprobar el tipo de dato usamos 'typeof'
console.log(typeof 'Ben Abi')

let firstName = 'Abraham'
let lastName = 'DSCS'
let country = 'Venezuela'
let city = 'Caracas'
let age = 29
let isMarried = false

console.log(firstName, lastName, country, city, age, isMarried);

// Declarando variables con valores numéricos
const gravedad = 9.81;
const ebullicion = 100;
const PI = 3.14;

console.log(gravedad, 'punto de ebullicion es ' + ebullicion, PI);

// Las variablas tambien pueden ser declarada en una linea separada
let primerNombre = 'Pedro'
work = 'bibliotecario'
viveEn = 'Argentina'

console.log(primerNombre, work, viveEn);

console.log(typeof ('punto de ebullicion es ' + ebullicion));
/**
 * comentario multilineal
 * fácil de hacer y leer.
 */