function etiqueta( literales, ...subtituciones ) {

  let resultado = "";

  // console.log( arguments );
  console.log( literales );
  console.log( subtituciones );

  for( let i = 0; i < subtituciones.length; i++ ) {
    resultado += literales[i];
    resultado += subtituciones[i];
  }

  return resultado;
}

let unidades = 5;
    costo_unitario = 10;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades + costo_unitario} pesos.`;

console.log( mensaje );
