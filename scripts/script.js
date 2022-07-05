//  algoritmo que pide al usuario que ingrese un numero y devuelve por consola el mensaje Hola la cantidad de veces ingresada

let numeroIngresado = parseInt(prompt("Ingrese un numero"));

for (let i = 1; i <= numeroIngresado; i++) {
    console.log("Hola numero " + i)
}