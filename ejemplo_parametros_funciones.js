
// es6 los parametros se pueden inicializar
function printPersona( nombre = "Diego", apellido = "Uribe" ) {
  // es5
  // nombre = nombre || "sin nombre";
  // nombre = (typeof nombre !== "undefined")? nombre : "sin nombre"

  console.log( `${ nombre } ${ apellido }` );
}

function cParam( fn = saludar , persona = { nombre: "Diego"} ) {

  console.log( typeof fn );

  if( typeof fn === "undefined" ) {
    console.error("No es una funcion");
    return;
  }

  fn();

  console.log( persona );
}

function saludar() {
  console.log( "Hola Mundo" );
}

let paramPersona = {
  nombre: "Juan"
}

// los argumentos con parametros opcionales ahora son afectados
function testFunc( a = 1, b = 2) {
  console.log( arguments );
}

printPersona();
cParam( saludar, paramPersona );
testFunc();
