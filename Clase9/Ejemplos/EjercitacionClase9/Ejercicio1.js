const prompt = require("prompt-sync")({ sigint: true });

//Declara dos variables numéricas numero1 y numero2.
// Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

//declarar dos variables numericas 

let numero1, numero2;
//pedir al usuario que ingrese los numeros
numero1 = parseFloat(prompt("Ingrese el primer numero"));
numero2 = parseFloat(prompt("Ingrese el segundo numero"));

//Comparar los numeros y mostrar el resultado 
if (numero1> numero2) {
    console.log(`El numero ${numero1} es mayor que ${numero2}.`);
} else if (numero1 < numero2) {
    console.log (`El numero ${numero2}es mayor que ${numero1}. `);
    } else { 
        console.log("Ambos numeros son iguales.");
        
    }
