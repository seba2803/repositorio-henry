//funcion suma
function suma(a: number, b: number) {
  return a + b;
}

console.log(suma(5, 10));

// se le declara el tipo string[] para poder agregarle elementos al array
const arreglo: string[] = [];

arreglo.push('Javascript', 'React', 'Typescript');

console.log(arreglo);

const recursionMultiply = (a: number, b: number) => {
  if (b == 0 || a == 0) {
    return 0;
  } else {
    return recursionMultiply(a, b - 1) + a;
  }
};

console.log(recursionMultiply(4, 10));

//? tipos

type RGB = `#${string}`;

//* si no coloco '#' antes de 'fff' me tira error ya que el tipo de variable es del type RGB
const rgb: RGB = '#fff';

//* sigo el patron de simbolos que puede seguir
type Eleccion = 'x' | 'o' | '';

//* creo el formato que sigue la tabla
type Dupla = [
  [
    Eleccion,
    Eleccion,
    Eleccion,
    Eleccion,
    Eleccion,
    Eleccion,
    Eleccion,
    Eleccion,
    Eleccion
  ]
];

//* union de tipos
type TresEnRaya = Dupla;

//* el juego sigue el patron de TresEnRaya
const juego: TresEnRaya = [['x', 'o', 'o', 'o', 'x', 'x', 'o', 'x', '']];

//? interfaces

interface Producto {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

//* extender una intefaz
interface Zapatilla extends Producto {
  talla: number;
}

//* uso de interfaz en un objeto
const compra: Zapatilla = {
  id: 1,
  name: 'Nike',
  price: 200,
  quantity: 1,
  talla: 40,
};

//! diferencias entre type e interface

//? 1 interface no soporta definicion de tipos primitivos
//* ej: type control = [0,0,0] | interface no puede definir eso

//? 2 los types no permiten ser definidos mas de una vez, las interfaces dejan un maximo de dos ya que se auto-extienden
/* ej: interface Persona { name: string}  interface Persona {edad: number} */ //* esto es totalmente valido
//* pero es una desventaja de la misma
//! ******************************************************************

//* como implementar una interfaz en una clase
class Carro implements Zapatilla {
  //* se debe reescribir los parametros de la interfaz en la clase
  id: number;
  name: string;
  price: number;
  quantity: number;
  talla: number = 39;
  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }

  get getName() {
    return `mi nombre es ${this.name} mi id es ${this.id} y mi talle es ${this.talla}`;
  }

  set setValues(id: number) {
    this.id = id;
  }
}

const miCarro = new Carro('Seba', 2);

miCarro.setValues = 28;

console.log(miCarro.getName);
