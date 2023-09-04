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
