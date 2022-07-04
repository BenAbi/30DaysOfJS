// Tipos de datos
console.log('02 Day: Data types');

// 
/** Datos primitivos
 *  Numeros: enteros y flotantes
 *  Cadenas: cualquier dato contenido entre " "; ' '
 *  Booleanos: true or false
 *  Nulo: null
 *  Indefinido: undefined 
 */

let enteros = 25;
let flotantes = 3.5;
let plabara = 'Hola';
let verdadero = true;
let datoVacio = null;
let indefinido = undefined;


/** Datos no primitivos
 *  Objetos
 *  Funciones
 *  Matrices
 */

//  Array
let numeros = [1, 2, 3];
numeros[0] = 0;

console.log(numeros);

let user01 = {
    firstName: 'Manolo',
    lastName: 'Ortiz',
    numberID: '001',
    city: 'Madrid',
    job: 'teacher'
}

let user02 = {
    firstName: 'Pedro',
    lastName: 'Lee',
    numberID: '342',
    city: 'Barcelona',
    job: 'doctor'
}

let user03 = {
    firstName: 'Pedro',
    lastName: 'Lee',
    numberID: '342',
    city: 'Barcelona',
    job: 'doctor'
}

let user04 = user03;

console.log(user01);
console.log(user02, user03, user04);

console.log(user01 == user02); //false
console.log(user02 == user03); //false
console.log(user01 == user01); //true
console.log(user03 == user04); //true
console.log(user02 == user04); //false

user04.firstName = 'Martha'; //cambia el dato [firstName] de user04 y por ende del user03
user03[0] = 'Sandra';
console.log(user04[0]); //agrega un dato llamado 0 en el objeto user
console.log(typeof user04.firstName) //string
console.log(typeof user04) //object
console.log(user04, user03);
console.log(user03 == user04); //true user03 y user04 son el mismo
console.log(user02 == user04); //false


