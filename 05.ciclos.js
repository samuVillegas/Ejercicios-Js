/*
  Ciclos
*/

let lista = [2, 10, 50];

/*
  Use un ciclo "for" para recorrer la lista de numeros y llamar a la funcion check con cada elemento de la lista
  NOTA: check es una funcion que recibe cualquiera dato.

  PLUS: Que en ambas funciones se retornara la suma de los elementos de la lista
  */
function cicloFor(check) {
  let suma =0;
  for (i = 0; i < check.length; i++){
       suma=suma+check[i];
  }
  return suma;
}

/*
  Usa un ciclo "while" para recorrer la lista de numeros y llamar a la funcion check con cada elemento de la lista
*/
function cicloWhile(check) {
  var x = 0;
  let suma =0;
    while (x < check.length){   
      suma=suma+check[x];
      x++;
  }

  return suma;
}
