

let mapa = new Map();

mapa.set( "nombre", "Diego" );
mapa.set( "edad", 31 );
mapa.set( "apellido" );

console.log( mapa );
console.log( mapa.size );

console.log( mapa.get( "nombre" ) );
console.log( mapa.get( "edad" ) );
console.log( mapa.has( "nombre") );
console.log( mapa.has( "apellido") );

mapa.delete( "nombre" );
console.log( mapa.has( "nombre") );
console.log( mapa.get( "nombre") );

mapa.set( "edad" );
console.log( mapa );

mapa.clear();

console.log( mapa );

console.log( "===============================" );

// inicializacion mapa

let mapa2 = new Map( [ ["nombre", "Diego"], [null, 123456] ] );

console.log( mapa2 );

console.log( mapa.get(null) );

// for Each Maps

let mapa3 = new Map( [ ["nombre", "Diego"], ["edad", 31] ] );

mapa3.forEach( function( value, llave, mapaOriginal ) {
  console.log( `Llave: ${llave}, valor: ${value}`);
  console.log( mapaOriginal );
});

mapa3.forEach( (valor, llave, mapaOriginal) => {
  console.log(`Llave: ${llave}, valor: ${valor}`);
  console.log( mapaOriginal );
});

//
