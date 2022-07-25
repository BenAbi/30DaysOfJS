//Exercise: Level 1
/**
//01
let firstName, lastName, country, city, age, isMarried, year
firstName = 'Abraham'
lastName = 'DSCS'
country = 'Venezuela'
city = 'Caracas'
age = 29
isMarried = false
year = 2022

console.log(`
Name: ${firstName} es ${typeof(firstName)}\n
Last Name: ${lastName} es ${typeof(lastName)}\n
Country: ${country} es ${typeof(country)}\n
City: ${city} es ${typeof(city)}\n
Age: ${age} es ${typeof(age)}\n
Is married?: ${isMarried} es ${typeof(isMarried)}\n
Year of the test: ${year} es ${typeof(year)}
`)

//02
console.log('10' == 10)
console.log('10' === 10)

//03 
console.log(parseInt('9.8') == 10)
console.log(parseInt('9.8') < 10)

//04
console.log(`True statment`)
console.log(2<3)
console.log(typeof('god') == typeof('dog'))
console.log(true == !false)

console.log(`False statment`)
console.log(3<2)
console.log('cat' == 'dog')
console.log(true == !true)

//05
console.log('Figure out the result 01')

console.log(`4>3 es verdadero: ${4>3}`)         //true
console.log(`4>=3 es verdadero: ${4>=3}`)       //true
console.log(`4<3 es falso: ${4<3}`)             //false
console.log(`4<=3 es falso: ${4<=3}`)           //false
console.log(`4==4 es verdadero: ${4==4}`)       //true
console.log(`4===4 es verdadero: ${4===4}`)     //true
console.log(`4!=4 es falso: ${4!=4}`)           //false
console.log(`4!==4 es falso: ${4!==4}`)         //false
console.log(`4!='4' es falso: ${4!='4'}`)       //false
console.log(`4=='4' es verdadero: ${4=='4'}`)   //true
console.log(`4==='4' es falso: ${4==='4'}`)     //false
console.log('python'.length != 'jargon'.length) //false

//06
console.log('Figure out the result 02')

console.log(`4>3 && 10<12 es verdadero: ${4>3 && 10<12}`)       //true
console.log(`4>3 && 10>12 es falso: ${4>3 && 10>12}`)           //falso
console.log(`4>3 || 10<12 es verdadero: ${4>3 || 10<12}`)       //true
console.log(`4>3 || 10>12 es verdadero: ${4>3 || 10>12}`)       //true
console.log(`!(4>3) es falso: ${!(4>3)}`)                       //false
console.log(`!(4<3) es verdadero: ${!(4<3)}`)                   //true
console.log(`!(false) es verdadero: ${!(false)}`)               //true
console.log(`!(4>3 && 10<12) es falso: ${!(4>3 && 10<12)}`)     //false
console.log(`!(4>3 && 10>12) es verdadero: ${!(4>3 && 10>12)}`) //true
console.log(`!(4==='4') es verdadero: ${!(4==='4')}`)           //true
console.log(`There is 'on' in both dragon and python`)
let dra = 'dragon'
let pyt = 'python'
let subStr = 'on'
console.log(dra.includes(subStr) && pyt.includes(subStr))

//07
const now = new Date()
console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()+1}`)
console.log(`Date: ${now.getDate()}`)
console.log(`Hours: ${now.getHours()}`)
console.log(`Minutes: ${now.getMinutes()}`)
console.log(`The numbers of seconds elapsed from January 1, 1970 to now is: ${now.getTime()/1000}`)

*/

//Exercise: Level 2
//01 area of triangle
/**
let base = 0
let height = 0
let area

base = prompt('Escriba la base del triangulo:', 'BASE')
height = prompt('Escriba la altura del triangulo:', 'ALTURA')
area = 0.5*base*height
console.log(`El area del triangulo es: ${area}`)
*/

//02 primeter of triangle
/**
let a, b, c, perimeter
a = prompt('Escriba el lado A del triangulo:', 'A')
b = prompt('Escriba el lado B del triangulo:', 'B')
c = prompt('Escriba el lado C del triangulo:', 'C')

perimeter = Number(a)+Number(b)+Number(c)
console.log(`El perimetro del triangulo es: ${perimeter}`)
console.log(typeof(perimeter))
console.log(typeof(a))
*/

//03 area and perimeter of rectangle
/**
let base, height, area, perimeter
base = prompt('Escriba la base del triangulo:', 'BASE')
height = prompt('Escriba la altura del triangulo:', 'ALTURA')

base = Number(base)
height = Number(height)
area = base*height
perimeter = (base+height)*2
console.log(`El area del rectangulo es: ${area}\nEl perimetro del rectangulo es: ${perimeter}`)
*/

//04 area and perimeter of circle
/**
const PI = 3.14
let radius, area, perimeter
radius = prompt('El radio del circulo es: ', 'RADIO')

radius = Number(radius)
area = PI*(radius**2)
perimeter = 2*PI*radius
console.log(`El area del circulo es: ${area}\nLa circunferencia mide: ${perimeter}`)
*/

//05 Pendiente, interseccion de X e Y. Siendo y=2x-2
/**
let y2, y1, x2, x1, slope
x1 = 0
y1 = (2*x1)-2
console.log(`El primer punto de la recta es: (${x1};${y1})`)

y2 = 0
x2 = (y2+2)/2
console.log(`El segundo punto de la recta es: (${x2};${y2})`)

slope = (y2-y1)/(x2-x1)
console.log(`La pendiente de la recta es: ${slope}`)

//06 Pendiente de (2,2) y (6,10)
x1 = 2
y1 = 2
x2 = 6
y2 = 10

let slope2 = (y2-y1)/(x2-x1)
console.log(`La pendiente de la recta de estos dos puntos (2,2) y (6,10) es: ${slope2}`)

//07 compare the slope of above two questions
console.log(`Es ${slope == slope2} que la primera y segunda recta tienen la misma pendiente`)
*/

//08 y = x^2 + 6x + 9. x = 0
/**
let y, x 
x = 0
y = (x**2) + (x*6) + 9
console.log(`Si x es ${x} entonces y es ${y}`)

x = 2
y = (x**2) + (x*6) + 9
console.log(`Si x es ${x} entonces y es ${y}`)

x = 34
y = (x**2) + (x*6) + 9
console.log(`Si x es ${x} entonces y es ${y}`)

x = 1
y = (x**2) + (x*6) + 9
console.log(`Si x es ${x} entonces y es ${y}`)

x = -1
y = (x**2) + (x*6) + 9
console.log(`Si x es ${x} entonces y es ${y}`)
*/

//09
/**
let hours, rate, earning
hours = prompt('Horas trabajadas')
rate = prompt('Pago por hora trabajada')
hours = Number(hours)
rate = Number(rate)

earning = hours * rate
console.log(`Tu entrada semana es de ${earning} euros.`)

//10
let name = 'Abraham'
name.length > 7
? console.log(`${name} your name is long`)
: console.log(`${name} your name is short`)

//11
let firstName, lastName
firstName = 'Abraham'
lastName = 'De Santa Clara'
firstName.length > lastName.length
? console.log(`Your first name, ${firstName} is longer than yor family name, ${lastName}`)
: console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}`)

//12
let myAge, yourAge
myAge = 29
yourAge = 32
myAge > yourAge
? console.log(`I am ${myAge - yourAge} years older than you`)
: console.log(`You are ${yourAge - myAge} years older than me`)

//13
const now = new Date()
const goodAge = 18
let year, clientAge
year = prompt('Enter birth year')
clientAge = now.getFullYear() - year

clientAge >= goodAge
? console.log(`You are ${clientAge}. You are old enough to drive.`)
: console.log(`You are ${clientAge}. You will bo allowed to drive after ${goodAge-clientAge} years.`)

//14
let age = prompt('Enter years you live')
const now = new Date()
console.log(`tiempo en segundos ${age*365*24*60*60*100} desde ${now.getFullYear() - age}`)

//15
const now = new Date()
//I.
console.log(`I. ${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)
//II.
console.log(`II. ${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)
//III.
console.log(`III. ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)
*/

//Exercise: Level 3
const now = new Date()
console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)

let month, day, hours, min
month = now.getMonth()+1
day = now.getDate()
hours = now.getHours()
min = now.getMinutes()

month >= 10
? month
: month = `0${month}`
//console.log(month)

day >= 10
? day
: day = `0${day}`
//console.log(day)

hours >= 10
? hours
: hours = `0${hours}`

min >= 10
? min
: min = `0${min}`

console.log(`${now.getFullYear()}-${month}-${day} ${hours}:${min}`)
