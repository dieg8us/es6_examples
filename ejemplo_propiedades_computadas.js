
// es5
var persona = {};

var apellido = "apellido";

persona["primer nombre"] = "Diego";
persona[apellido] = "Uribe";

// console.log(persona["primer nombre"]);
// console.log(persona[apellido]);

// es6

var apellido = "primer apellido";

var persona = {
  "primer nombre": "Diego",
  [ apellido ]: "Uribe"
};

console.log( persona["primer nombre"] );
console.log( persona[ apellido ]);

var subFijo = " nombre";

var persona = {
  [ "primer" + subFijo ]: "Melissa",
  [ "segundo" + subFijo ]: "Karen"
};

console.log( persona[ "primer nombre" ]);
console.log( persona[ "segundo" + subFijo ]);
