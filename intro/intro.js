// console no es parte de js, sino del navegador
console.log("Hola mundo")
 
// inicializacion de variables

var miNombre

// asignacion de variable

miNombre = "Piero"

//  inicializacion y asignacion simultanea
let miNombreConLet = "Piero"


// reasignacion
miNombreConLet = "Otro valor"

// Es obligatorio asignar ni bien son creadas las constantes
const miConstante = 2.13

// las constantes no son reasignables, ni tampoco redefinir

// Primitivos

// number -> todos son de punto flotante y 64 bits
let myNumber = 2

// big ing -> un entero de 65 bits

let myBigInt = 2n

// string

let myString = "2"

// boolean

let myBoolean = true


// Todos los primitivos pasan por valor y no por referencia

console.log(8 + myNumber)
