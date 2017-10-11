
// se ignoran elementos repetidos
let items = new Set();

items.add( 10 );
items.add( 11 );
items.add( 7 );
items.add( 7 );
items.add( 7 );
items.add( "7" );
items.add( "7" );
items.add( 8 );

console.log( items );
console.log( items.size );

let items2 = new Set([ 1,2,3,4,5,6,7,7,7,7,7,7,7 ]);

console.log( items2 );
console.log( items2.size );

let items3 = new Set([ 1,2,3,4,5,6,7 ]);

console.log( items3.has(7) );
console.log( items3.has("7") );
console.log( items3.has(8) );
console.log( items3.has(9) );
console.log( items3.has(1) );


console.log( "============================" );

let items4 = new Set([ 1,2,3,4,5,6,7 ]);
console.log( items4.size );
items4.delete( 3 );
console.log( items4.size );
console.log( items4 );

items4.clear();

console.log( items4 );

console.log( "===============================" );

let personas = new Set(["Diego", "Maria", "Susana"]);

personas.forEach( function( valor, llave, setOriginal ) {
  console.log( valor, llave, setOriginal );
  console.log( personas === setOriginal );
});

console.log( "=================================" );

let numeros = [1,2,3,4,5,6,7,7,7,7,7,7,7,8,8,8,8,8,1,2,3,4,5];
let setNumeros = new Set( numeros );

console.log( setNumeros );

let arrayNumeros = eliminaDuplicados( numeros );

function eliminaDuplicados( items ) {
  return [... new Set(items)];
}

console.log( "=================================" );

// weekset similar a los set
