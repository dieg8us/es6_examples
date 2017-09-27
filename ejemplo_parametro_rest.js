


function agregar_alumno( arr_alumnos, ...alumnos ) {

  console.log( arguments );

  for( let i = 0; i < alumnos.length; i++ ) {
    arr_alumnos.push( alumnos[i] );
  }

  return arr_alumnos;
}

let alumnos_arr = ["Diego"];

let alumnos_arr2 = agregar_alumno( alumnos_arr, "Maria", "Pedro", "Susana", "Juan", "Hernando");

console.log( alumnos_arr2 );

// Restricciones
/*
  solo puede haber un parametro Rest
  se debe declarar al final de los argumentos
*/
