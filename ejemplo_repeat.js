

let texto = "Hola Mundo";

console.log( texto.repeat( 2 ) );
console.log( "0".repeat( 2 ) );


const ESPACIOS = 12;

let nombres = ["Diego", "Melisa", "Juan"];
let telefonos = ["123456789", "123456789", "123456789"];

for( i in nombres) {

  let dif = ESPACIOS - nombres[i].length;

  console.log( nombres[i] + " ".repeat( dif ) + "|" + telefonos[i] );
}
