// No cambies los nombres de las funciones.

const { cleanMessage } = require("@11ty/eleventy/src/EleventyErrorUtil");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  new_arr = []
  for (let i = 0; i < array.length; i++) {
    new_arr.push(array[i] + 1)
}

    return new_arr

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  //array[array.length] = elemento;
  //return array;

  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

    array.unshift(elemento);
    return array;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

  return palabras.join(" ");
  

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  found = array.find(element => element === elemento);

  if (found === elemento) {
    return true
  }else{
    return false
  }
  

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let a = 0 
  for (let i = 0; i < numeros.length; i++){
    a = a + numeros[i];
  }

  return a; 

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //resultadosTest = [10, 10, 16, 12]
  let a = 0 
  for (let i = 0; i < resultadosTest.length; i++){
    a = a + resultadosTest[i];
  }

  return (a / resultadosTest.length); 

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:


  let mas_grande = 0
  for (let i = 0; i < numeros.length; i++){
    
    if(numeros[i] > mas_grande ) {
      mas_grande = numeros[i]
    }
    
  }

  return mas_grande;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if(arguments.length < 1) return 0
   
    var a = 1
    for (var i = 0; i < arguments.length; i++){

      a = a * arguments[i];

    }

     return a;


}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  result = arreglo.filter(elemento => elemento > 18);
  return result.length

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  return numeroDeDia === 1 || numeroDeDia === 7 ? 'Es fin de semana' : 'Es dia Laboral'
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  str = n.toString()
  if (str.charAt(0) === '9'){return true} else {return false} 
  //return str.charAt(0) === '9' ? true : false
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  var a 
  var b = false

  for(let i=0 ; i < arreglo.length ; i++){


      if(i < 1){

        a = arreglo[i];

      }else {

        if (a === arreglo[i]){

          b = true;

        }else{

          return false;
        }
        
      }

  }

    return b;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var new_arr = [];

  for(let i = 0; i < array.length; i++){

    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){

        new_arr.push(array[i]);
    }
  }

  if (new_arr.length < 3) {
    return 'No se encontraron los meses pedidos';
  }else{
    return new_arr;
  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var new_arr = [];

  for(let i = 0; i < array.length; i++){

    if(array[i] > 100){

        new_arr.push(array[i]);
    }
  }

    return new_arr

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:


  let i = 0;
  new_arr = [];

  do {
    
    if (numero === i ){
      return 'Se interrumpió la ejecución';
      break;
    }else {
      numero = numero + 2;
      new_arr.push(numero)
    }

    i++; 

  } while (i < 10);

    return new_arr;

  }


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
