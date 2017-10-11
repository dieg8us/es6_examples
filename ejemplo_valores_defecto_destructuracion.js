
// let frutas = [ "banano", "pera" ];
//
// let [ fruta1, fruta2="manzana" ] = frutas;
//
// console.log( fruta1 );
// console.log( fruta2 );

let opciones = {
  nombre:"Diego",
  apellido:"Uribe"
};

let { nombre, apellido="Segura" } = opciones;

console.log( nombre );
console.log( apellido );
