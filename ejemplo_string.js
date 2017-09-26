

var saludo = "Hola Mundo!";

// es5

console.log( saludo.substr( 0, 1) === "H" );
console.log( saludo.indexOf( "x" ));

// es6

console.log( saludo.startsWith("H") );
console.log( saludo.endsWith("Mundo!") );
console.log( saludo.includes("x"));

console.log( saludo.startsWith("Mu", 5) );
console.log( saludo.includes( "a", 5 ));
