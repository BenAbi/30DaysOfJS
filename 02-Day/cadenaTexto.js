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