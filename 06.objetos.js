/*
 Objetos
*/

let persona;

/*
  En la variable "persona" guarda un objeto con tu nombre en una propiedad "nombre" y tu edad en una propiedad "edad"
  NOTA: Recuerda la estructura de los objetos en JavaScript:
  var carro = {
    modelo: 'Mazda',
    esElectrico: false,
    llantas: 4,
  }
*/

persona = { nombre:"Samuel",edad:17}


/*
  Agregale una nueva propiedad a "persona" llamada "colegio" y dale algun valor.
*/


Object.defineProperty(persona,'Colegio', {value:"IE BARRIO SAN NICOLAS"});