

// es5
var numeros = [ 1,5,10,15,100,234 ];

var max = Math.max.apply( Math, numeros );

console.log( `Ejemplo es5: ${max}`);


// es6
let numeros2 = [ 1,5,10,15,100,234 ];

let max2 = Math.max( ...numeros2 );

console.log( `Ejemplo es6: ${max2}` );  
