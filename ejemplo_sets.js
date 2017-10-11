
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
