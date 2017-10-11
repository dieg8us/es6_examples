


// ejemplo
// https://www.mozilla-hispano.org/es6-en-detalle-simbolos

let primerNombre = Symbol("primer nombre");
let segundoNombre = Symbol();

let persona = {
  [segundoNombre]: "Uribe"
};

persona[primerNombre] = "Diego";

console.log( persona[primerNombre] );
console.log( persona[segundoNombre] );
console.log( primerNombre );
console.log( segundoNombre );

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log( simbolo1 == simbolo2 );
console.log( simbolo1 === simbolo2 );
console.log( Object.is(simbolo1, simbolo2) );

console.log( typeof primerNombre );
