
let id = Symbol.for("id");
let activo = Symbol.for("activo");

let persona = {
  [id]: 123,
  [activo]: true,
  ["codigo"]: "XY123",
  nombre: "Diego",
  apellido: "Uribe",
  edad: 31
};

console.log( Object.keys(persona) );

for( key in persona ) {
  console.log( key, persona[key] );
}

let simbolos = Object.getOwnPropertySymbols(persona);
console.log( simbolos );

for( i in simbolos ) {
  console.log( simbolos[i], Symbol.keyFor(simbolos[i]) );
}
