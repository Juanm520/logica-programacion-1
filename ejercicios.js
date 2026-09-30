// Solicitud por prompt de consola.
const prompt = require('prompt-sync')()
// Argumetos por consola.
const argumentos = process.argv

if (argumentos.length > 2){
    // Por argumentos desde consola:
    organizaNumeros(argumentos[2], argumentos[3], argumentos[4])

} else {
    // Mensaje inicial.
    console.log('Ingreso de los tres numeros a organizar.')
    const num1 = prompt('Ingresa el primer numero: ')
    const num2 = prompt('Ingresa el segundo numero: ')
    const num3 = prompt('Ingresa el tercer numero: ')
    
    organizaNumeros(num1, num2, num3)
}


// Evaluacion de los numeros para resolver el ejercicio:
function organizaNumeros(num1, num2, num3){
    // Retorna console.log con los numeros organizados o si son iguales 'Los numeros son iguales.'.
    const n1 = Number(num1)
    const n2 = Number(num2)
    const n3 = Number(num3)

    // Maneja las condiciones y combianciones:

        // Condicional 1> Num1 Mayor.
    if(n1 > n2 ){
        if (n2 > n3 ) {
            console.log (n1, n2, n3)
            return console.log (n3, n2, n1)
           } else {
               console.log (n1, n3, n2)
            return console.log (n2, n3, n1)
            } 
    } 
    
        // Condicional 2 = N2 mayor.
   if(n2 > n3 ){
        if (n3 > n1 ) {
            console.log (n2, n3, n1)
            return console.log (n1, n3, n2)
           } else {
               console.log (n2, n1, n3)
            return console.log (n3, n1, n2)
            } 
    } 

        // Condicional 3 = N3 mayor.
     if(n3 > n1 ){
        if (n1 > n2 ) {
            console.log (n3, n1, n2)
            console.log (n2, n1, n3)
           } else {
               console.log (n3, n2, n1)
            return console.log (n1, n2, n3)
            } 
    } 

    // Si no entra a alguna condicion, los numeros son iguales.
    console.log ('Los numeros son iguales.')
} 

