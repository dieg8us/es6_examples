
var saludo1 = function(nombre) {
  return "Hola " + nombre;
}("Diego");

console.log( saludo1 );

// es6
let saludo2 = (nombre => `Hola ${nombre}`)("Diego");

console.log( saludo2 );
