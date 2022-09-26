console.log('Sesión HS03 funciones')

//++++++++++ Función declarada ++++++++++
/**
 * Este es un ejemplo de una función declarada (function declaration, function statement).
 * Realiza la multiplicación de 2 números
 * Una caracteristica de las funciones declaradas es que tiene un hoisting (elevación)
 * @param {Number} a Multiplicando 1
 * @param {Number} b Multiplicador
 * @returns resultado de la multiplicación a * b
 */
function multiplica(a,b){
    return a*b
}

// Llamado de la función declarada.
console.log(`Multiplica 5 * 6 =`, multiplica(5,6))

//++++++++++ Función expresada ++++++++++

/**
 * Las funciones expresadas (function expressions) son declaradas dentro de la asignación de una variable.
 * Estas funciones pueden ser anónimas (no tener nombre)
 * 
 * Las funciones expresadas no tienen hoisting.
 */

/**
 * Sumatoria de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a + b
 */
const suma = function(a,b){return a+b}
console.log(`El resultado de 5 + 5 =`, suma(5,5));

// La diferencia entre es que la función expresada lleva una variable para declarar la función.

// ++++++++++ Función autoinvocadas ++++++++++
/**
 * Las funciones autoinvocadas (self-invoking functions) pueden ser anónimas y se autoejecutan() en su declaración.
 */

(function(){
    console.log('Buenas');
    console.log('Bienvenidos al Himalaya');
    console.log('¿Helado?');
})();

// ++++++++++ Función flecha ++++++++++

/**
 * Las funciones flecha funcionan similar a las funciones declaradas pero no requieren la palabra "function"
 * y si tienen una sola instrucción y es el retorno, no requiere la instrucción "return"
 */

const resta = (a,b) => a-b;
console.log(`La resta de 15 - 5 = `, resta(15,5));


// ++++++++++ Función default ++++++++++

/**
 * Función con parámetros inicializados
 */

function divide(a,b=1){
    return a/b;
}
console.log(`La división de a/b =`, divide(4));

// ++++++++++ Función recursivas ++++++++++

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));
}
console.log(`Factorial de 5 =`, factorial(5));