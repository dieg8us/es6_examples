
var miFuncion2 = function(valor) {
  return valor;
}

// es6
let miFuncion1 = valor => valor;

var sumar2 = function( num1, num2 ) {
  return num1 + num2;
}

// es6
let sumar1 = ( num1, num2 ) => num1 + num2;

var saludar2 = function() {
  return "Hola Mundo";
}

// es6
let saludar1 = () => "Hola Mundo";

var saludarPersona = function(nombre) {
  var salida = "Hola, " + nombre;
  return salida;
}

let saludarPersona2 = nombre => {
  let salida = `Hola, ${nombre}`;
  return salida;
}

console.log( saludarPersona2("Diego") );

var obtenerLibro = function(id) {
  return {
    id: id,
    nombre: "Harry Poter"
  }
}

// es6
let obtenerLibro2 = id => ({ id:id, nombre: "Harry Poter"});

console.log( obtenerLibro2() );
