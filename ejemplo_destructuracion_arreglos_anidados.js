

let colores1 = [ "rojo", ["verde", "amarillo"], "morado", "naranja" ];

[ color1, [color2] ] = colores1;

console.log( color1 );
console.log( color2 );

let colores2 = [  "rojo", "verde", "amarillo", "morado", "naranja" ];

let [ colorPrincipal, colorSecundario, ...demasColores ] = colores2;

console.log( colorPrincipal );
console.log( colorSecundario );
console.log( demasColores );
