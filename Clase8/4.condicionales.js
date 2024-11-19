// CONSIGNA

//Crea un programa que simule un sistema de calificacion basado en la nota de un estudiante
// (un valor numerico del 0 al 100) El programa debe determinar si el estudiante ha reprobado,
// aprobado o ha obtenido una calificacion excelente, segun las siguientes condiciones:

// Si la nota es menor a 60, el estudiante ha reprobado.
// Si la nota esta entre 60 y 89 (inclusive), el estudiante ha aprobado.
// Si la nota es 90 o mayor, el estudiante ha obtenido una calificacion excelente.
// Usa un condicional if, el if, y el para mostrar el mensaje correspondiente en la consola

let nota = 85;

if (nota < 60) {
    console.log("Reprobado"); //Si la nota es menor a 60, el estudiante ha reprobado
} else if (nota >= 60 && nota <= 89) {
    console.log("Aprobado"); //Si la nota esta entre 60 y 89 (inclusive), el estudiante ha aprobado

} else {
    console.log("Calificacion excelente!"); //Si la nota es 90 o mayor, el estudiante ha obtenido una calificacion excelente.
    
}