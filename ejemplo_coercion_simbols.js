
// Rara ves se usa

let id = Symbol.for("id");
let numero = 10;
let texto = "10";
let bool = true;
let notAN = NaN;

console.log( numero + texto );
console.log( numero + Number(texto) );
console.log( numero + notAN );

console.log( "Mi simbolo es: " , id );
console.log( "Mi simbolo es: " + String(id) );
