// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

const { suma } = require("../../02-JS-II/homework/homework");

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  let sumar = 0;
  for (var i = 0; i <= 10; i++) {
    sumar = sumar + i;
  }
  return sumar
}

function encuentraPares(array) {
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  let resultado = []
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      resultado.push(array[i])
    }
  }
  return resultado
}



function elevaAlCuadrado(array) {
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  //Con el metodo map
  /* return array.map(function (acu,num){
    return num**2;
  }) */

  /*  let arreglo = []
   for (i = 0; i < array.length; i++) {
     let cuadrado = Math.pow(array[i], 2)
     arreglo.push(cuadrado)
   }
   return arreglo */
  return array.map(function (num) {
    return num ** 2;
  })
}


function sumaArray(array) {
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  const resultado = array.reduce ((acc, item)=>{
      return acc + item
  },0);
  return resultado
}

function numeroDigitos(num) {
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;
}
numeroDigitos(12345678)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  imprimirSumaNumeros,
  encuentraPares,
  elevaAlCuadrado,
  sumaArray,
  numeroDigitos
};
