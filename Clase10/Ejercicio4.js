//Ejercicio 4 – Tipo de Datos:
//Declarar 4 variables utilizando la palabra reservada let y asignarles
//valores según el tipo de dato que sugiera su nombre. Además, realizar
//operaciones y validaciones adicionales sobre estos valores.
//Pasos a seguir:
//Declaración de Variables:
//1. Declara una variable llamada verdadero y asígnale un dato
//de tipo booleano (true o false).
//2. Declara una variable llamada texto y asígnale un string de tu
//elección (puedes usar cualquier mensaje que prefieras).
//3. Declara una variable llamada numero y asígnale un dato
//numérico (puedes usar cualquier número entero o decimal).
//4. Declara una variable llamada nada y asígnale un valor que
//represente la ausencia de valor en JavaScript.
//Operaciones y Validaciones:
//1. Realiza una operación matemática usando la variable
//número, por ejemplo, suma o resta con otro número de tu
//elección.
//2. Concatena el “string” de la variable texto con otro mensaje
//adicional
//3. Verifica si la variable “verdadero” es true o false y muestra un
//mensaje diferente según el resultado.
//4. Implementa una condición para verificar si la variable nada
//es null y muestra un mensaje si es así.

 //EMPEZAMOS 

//1. Declara una variable llamada verdadero y asígnale un dato
//de tipo booleano (true o false).

let verdadero = true;

//2. Declara una variable llamada texto y asígnale un string de tu
//elección (puedes usar cualquier mensaje que prefieras).

let texto = " Hoy llueve";

//3. Declara una variable llamada numero y asígnale un dato
//numérico (puedes usar cualquier número entero o decimal).
 let numero = 50;

 //4. Declara una variable llamada nada y asígnale un valor que
//represente la ausencia de valor en JavaScript.

let nada = null; 

//  OPERACIONES Y VALIDACIONES 
//1. Realiza una operación matemática usando la variable
//número, por ejemplo, suma o resta con otro número de tu
//elección.
let suma = numero + 20

console.log("resultado de la suma:",  suma);

//2. Concatena el “string” de la variable texto con otro mensaje adicional

console.log (texto + " y maniana no"); 

//3. Verifica si la variable “verdadero” es true o false y muestra un
//mensaje diferente según el resultado.

if(verdadero) {
    console.log (`verdadero es true`); 
}
else {
    console.log(`el valor de la variable es falso`)
}

//4. Implementa una condición para verificar si la variable nada
//es null y muestra un mensaje si es así.

if (nada === null) {
    console.log ( "La variable 'nada' no tiene valor (es null)");
}


