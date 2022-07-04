/**String
 * Cadenas de texto pueden hacerse de varias maneras.
 * Single, double and back-tick comillas
 * \n: Nueva linea
 * \t: Tabulador, 8 espacios
 * \\: Barra invertida
 * \': Una frase
 * \": comillas dobles(")
 */

 let cita = 'Pedro dijo "Hola Manolo" y saltó de un puente.'
 console.log(cita);
 let autor = 'Sofía\n';
 let editorial = 'MAD '
 let año = '1990 '
 let conca = autor + editorial + año + cita; // Concatenación de cadenas. Unión de dos o mas cadenas de texto
 
 console.log(conca)
 console.log(typeof conca);
 
 let prueba = '10' + '20';
 console.log(prueba);
 console.log(typeof prueba)
 let prueba01 = 10 + 20;
 console.log(prueba01);
 console.log(typeof prueba01)
 
 //Secuencia de escape en cadenas
 let nuevaLinea = 'Nueva Linea\nfinal de nueva linea' //Nueva linea después del texto
 let tabulador = 'Tabulador\ttabulador' //Tabulador
 let barraInvertida = 'Barra invertida\\final' //Barra invertida
 let frase01 = 'Una frase\'final de frase 01'
 let frase02 = 'Segunda frase\"final de frase 02'
 
 console.log(nuevaLinea)
 console.log(tabulador)
 console.log(barraInvertida)
 console.log(frase01)
 console.log(frase02)
 
 console.log('Espero que todos estén disfrutando el desafío de 30 días de JavaScript.\n¿Y tú?') // salto de línea
 console.log('Días\ttemas\tEjercicios')
 console.log('Día 1\t3\t5')
 console.log('Día 2\t3\t5')
 console.log('Día 3\t3\t5')
 console.log('Día 4\t3\t5')
 console.log('Este es un símbolo de barra invertida (\\)') // Para escribir una barra invertida
 console.log('En todos los lenguajes de programación comienza con \"¡Hola, mundo!\"')
 console.log("En todos los lenguajes de programación comienza con \'¡Hola, mundo!\'")
 console.log('El dicho \'Ver para creer\' no es correcto en 2022')
 
 //Literales de plantilla

console.log(`La suma de 2 y 3 es 5`) // escribiendo estáticamente los datos
let a = 2
let b = 3
console.log(`La suma de ${a} y ${b} es ${a + b}`) // inyectando los datos dinámicamente
console.log('La suma de ${a} y ${b} es ${a + b}');
// Este método solo funciona con back-tick

let espacio = ' '           
let primerNombre = 'Juan'
let apellido = 'Becerra'
let pais = 'Colombia'
let ciudad = 'Medellin'
let idioma = 'español'
let trabajo = 'escritor'
let edad = 43
let nombreCompleto = primerNombre + espacio + apellido;

let personaInfoDos = `Soy ${nombreCompleto}. Tengo ${edad} años. Vivo en ${pais}.` //ES6 - Método de interpolación de cadenas
let personaInfoTres = `Soy ${nombreCompleto}. Vivo en ${ciudad}, ${pais}. Soy un ${trabajo}. Escribo en ${idioma}.`
console.log(personaInfoDos)
console.log(personaInfoTres)

/**String methods
 * length (longitud): Devuelve el numero de caracteres usado en la cadena de texto.
 * Accesing character (acceso a los caracteres de una cadena) El conteo inicia desde 0 y el indice es la longitud de la cadena
 * toUpperCase(): este método cambia la cadena a letras mayúsculas
 * substr(indice, longitud): divide la palabra desde el indice indicado y el numero de caracteres que se quiere (longitud)
 * substring(primerIndice, ultimoIndice): Devuelve los caracteres recogido por los indices
 * split(): Divide una cadena en un lugar específico
 * trim(): Elimina el espacio al principio o al final de una cadena
 * includes(): Boolean, verifica la existencia de sub cadena en la cadena de texto
 * replace(): intercambia la primera subcadena que cumpla con los parámetros -> replace(viejo, nuevo)
 * charAt() devuelve el valor en la posición del indice -> charAt(#)
 * charCodeAt(): Devuelve el código char (numero ASCII) del valor del indice
 * indexOf(): Devuelve la primera posición de la subcadena, de no existir devuelve -1. -> indexOf(subString)
 * lastIndexOf(): Devuelve la ultima posición de la subcadena, de no existir devuelve -1. -> lastIndexOf(subString)
 * concat(): toma muchas sucadenas y las une
 * startWith(): Boolean, verifica si la subcadena se encuentra al principio de la cadena
 * endsWith(): Boolean, verifica si la subcadena se encuentra al final de la cadena
 * search(): Devuelve el indice de la primera coincidencia de la subcadena del argumento
 * match(): Busca en la cadena el argumento e indica la posición cadena en la que se encuentra. Sino devuelve NULL
 * repeat(): Toma un numero como argumento y devuelve la versión repetida de la cadena.
 */

let met = 'Metanfetamina'
console.log(met + ' tiene ' + met.length + ' letras.')

let firstLetter = met[0]
console.log(firstLetter)

let lastIndex = met.length - 1;
console.log(met[lastIndex]);

//Mayúscula
console.log(met.toUpperCase()) //METANFETAMINA

//minúscula
console.log(met.toLowerCase()) //metanfetamina

//substr(indice, # de caracteres limitado)
console.log(met.substr(3,3)) // Extracción de caracteres, desde el indicador y longitud de la misma

console.log(met.substring(3,8)) // Extracción de caracteres, desde el PRIMER indicador hasta el ULTIMO (no incluido en la extracción)

//split()
let titulo = '100 años de soledad'
console.log(titulo.split()); //Devuelve el titulo como un objeto(dentro de un array)
console.log(titulo.split('')); //Devuelve cada caracter por separado
console.log(typeof titulo) //string
console.log(typeof titulo.split()) //object
console.log(titulo.split(' '))

//trim()
let textoEspaciado = '      "ten un lindo dia"         '
console.log(textoEspaciado+ ' tiene ' + textoEspaciado.length + ' letras.')
console.log(textoEspaciado.trim() + ' tiene ' + textoEspaciado.trim().length + ' letras.')
console.log(textoEspaciado.length - textoEspaciado.trim().length + ' es la diferencia de caracteres entre el uso y no del método.')

//includes()
let parrafo = 'Si existe una subcadena en una cadena, devuelve verdadero; de lo contrario, devuelve falso.'
console.log(parrafo.includes('cadena')) // true
console.log(parrafo.includes('booleano')) // false
console.log(parrafo.includes('si')) // false distingue entre mayúsculas y minúsculas
console.log(parrafo.includes('Si')) // true

//replace()
console.log(parrafo)
parrafo.replace('subcadena', 'SUBCADENA'); // No modifica el string
console.log(parrafo)
console.log(parrafo.replace('cadena', 'CADENA')) //Solo reemplaza la primera subcadena que cumpla con las características 
console.log(parrafo.replace('Si existe una subcadena en una cadena', 'POLLO'))
console.log(parrafo.replace(' ', '-'))

//charAt()
console.log(titulo.charAt(5))
let i = 35;
//console.log(parrafo + ' tiene ' + parrafo.length + ' letras. La letra '+ parrafo.charAt(i) + ' esta en la posición ' + (i - 1));
console.log(`${parrafo} tiene ${parrafo.length} letras. La letra '${parrafo.charAt(i)}' esta en la posición ${i-1}`)

//charCodeAt()
console.log(`La letra '${titulo.charAt(4)}' en código ASCII es ${titulo.charCodeAt(4)}`)

//indexOf()
console.log(titulo.indexOf('soledad'));
console.log(titulo.substring(12))
console.log(titulo.indexOf('solitario'));

//lastIndexOf()
console.log(parrafo.lastIndexOf(' '));
console.log(parrafo)

//concat()
let calle = 'Calle '
let puerta = 'C'
let piso = 3
let edificio = 6
console.log(calle.concat('Santa Rosa, N'+edificio+', piso '+piso+' puerta '+piso+puerta))

//startWith()
console.log(met.startsWith('feta')) //false -> "Metan-feta-mina" | distingue de Mayus y minus
console.log(titulo.startsWith('100')) //true -> "100 años de soledad"

//endsWith()
console.log(met.endsWith('mina')) //true -> "Metanfeta-mina" | distingue de Mayus y minus
console.log(titulo.endsWith('100')) //false -> "100 años de soledad"

//search()
console.log(titulo.search('100')) // posición 0
console.log(titulo.search('dad')) // posición 16
console.log(titulo.search('soledad')) // posición 12

//match()
console.log(titulo.match('ños'))
console.log(nombreCompleto.match('Rosa')) //null
console.log(conca.match('MAD'))

//repeat()
let amor = `I'm in love\n`
console.log(amor.repeat(10));