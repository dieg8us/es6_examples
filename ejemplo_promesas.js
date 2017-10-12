

function tareasAsincrona() {

  let promesa = new Promise( (resolve, reject) => {
    setTimeout(function() {
      console.log("Proceso Asincrono terminado");
      // resolve();
      reject();
    },1300)
  } );

  return promesa;

}

tareasAsincrona().then( function() {
  console.log("Todo OK!");
}, function() {
  console.error("Todo Mal!");
});

console.log( "Codigo secuencial ");

// function resolve() {
//   console.log( "todo Ok!" );
// }
//
// function reject() {
//   console.log( "Todo Malo!" );
// }
