

let numeros = [100, 20, 30, 50, 200];

// for ( let i = 0; i < numeros.length; i++ ) {
//   console.log( numeros[i] );
// }
//
// for( let i in numeros ) {
//   console.log( numeros[i] );
// }

for( let numero of numeros ) {
  console.log( numero );
}


let personas = [
  { nombre: "diego", edad: 31 },
  { nombre: "maria", edad: 10 },
  { nombre: "fernanda", edad: 18 },
  { nombre: "juan", edad: 15 }
];

for( let per of personas ) {
  console.log( per.nombre, per.edad );
}

let personas2 = new Set();

personas2.add( { nombre: "diego", edad: 31 } );
personas2.add( { nombre: "maria", edad: 10 } );
personas2.add( { nombre: "fernanda", edad: 18 } );
personas2.add( { nombre: "juan", edad: 15 } );

for( per of personas ) {
  console.log( per );
}

let personas3 = new Map([["nombre", "diego"], ["apellido", "uribe"]]);

for( let detalle of personas3 ) {
  console.log( detalle );
}
