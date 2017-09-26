
// console.log( var_mensaje );

// variables en es5 siempre son undefined
// var var_mensaje = "Hola Mundo";

// console.log( let_mensaje );

// variables en es6 son mas estrictas
// let let_mensaje = "Hola Mundo";

// variable var es undefined
// if( 1 === 3 ) {
//   var vmensaje = "Prueba";
// }
//
// console.log( vmensaje );

/*
   variable let solamente se crea dentro del contexto
   por lo cual si se llama fuera del contexto no sera
   reconocida
*/
// if ( 1 === 3 ) {
//   let lmensaje = "Prueba";
// }
//
// console.log( lmensaje );

/*
  En ECMAScript 6 las variables solamente
  pueden ser declaradas una vez
*/
let mensaje = "Hola Mundo";
var mensaje = "Hola";

console.log( mensaje );
