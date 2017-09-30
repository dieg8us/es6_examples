

var arreglo = [5,2,11,1,9,10,20];

var ordenado = arreglo.sort(function( a,b ) {
  return a - b;
});

let ordenadoES6 = arreglo.sort(( a,b ) => a - b);

console.log( ordenado );
console.log( ordenadoES6 );
