function deleteElements(arr){
    let newlista = new Set(arr);//el objeto Set no acepta elementos repetidos
    return [...newlista];
  }
  console.log(deleteElements([1,1,2,2,3,4,5,5]));

  //? contexto de ejecucion
// const yo = "Gama"; // global
​
// console.log(yo);
​
// const miFuncion = () => {
//   const x = "esta es la funcion"; // local
//   console.log(x);
// };
​
// miFuncion();
​
//?hoisting
​
// saludar();
// console.log(bartolomiau);
// console.log(gama);
// console.log(despedirse); //undefined
​
// // declaracion
// function saludar() {
//   console.log("funcion saludar", "holis");
// }
​
// // expresion
// var despedirse = function () {
//   console.log("chau");
// };
​
// var bartolomiau = "Hola soy el Barto";
// let gama = "Yo de nuevo";
​
// console.log(bartolomiau);
​
//? This keyword
​
// console.log(this);
​
// const describir = function () {
//   // ${}
//   console.log(`Soy ${this.nombre} y tengo un gato llamado ${this.mascota}`);
​
//   console.log("primero", this);
// };
​
// describir();
​
// const instructor = {
//   nombre: "Gama",
//   mascota: "Bartolomiau",
​
//   describirA: function () {
//     // ${}
//     console.log(`Soy ${this.nombre} y tengo un gato llamado ${this.mascota}`);
​
//     // soy este instructor. nombre y tengo un gato llamado este instructor.mascota
​
//     console.log("gama", this);
//   },
// };
​
// const instructorOtro = {
//   nombre: "Sol",
//   mascota: "Palta",
​
//   describirA: function () {
//     // ${}
//     console.log(`Soy ${this.nombre} y tengo un gato llamado ${this.mascota}`);
​
//     // soy este instructor. nombre y tengo un gato llamado este instructor.mascota
​
//     console.log("sol", this);
//   },
// };
​
// function prueba() {
//   let x = "pruebita";
​
//   console.log(x);
//   console.log(`hola soy la ${x}`);
//   console.log("hola soy la " + x);
// }
​
// prueba();
// instructorOtro.describirA();
// instructor.describirA();
​
//? data types / tipado debil
​
// primitivos (strings,booleanos, numero, undefined ,symbol)
​
// let nombre = "Gama";
​
// console.log(nombre);
​
// console.log(typeof nombre);
​
// nombre = 3;
​
// console.log(nombre);
// console.log(typeof nombre);
​
//? Coercion de datos
​
// console.log("Yo soy" + " gama y tengo " + 35 + " años");
// console.log("23" + 3);
// console.log("23" - 3);
// console.log("gama" - 2);
// console.log(3 + "23");
// console.log("34" > 1);
// console.log(6 / "2");
​
// //? Conversion
​
// const fechaDeNacimiento = "1987";
​
// console.log(typeof fechaDeNacimiento);
​
// console.log(typeof Number(fechaDeNacimiento));
​
// let x = 1987;
​
// console.log(Number(fechaDeNacimiento) === 1987);
// console.log(fechaDeNacimiento === x.toString());
​
// const enNumero = Number(fechaDeNacimiento);
​
// console.log(typeof enNumero);
​
// Expresion y declaracion de funciones
​
//declaracion o statement
// function sumar(a, b) {
//   console.log(a);
//   console.log(b);
//   return a + b;
// }
​
// // sumar(1, 3);
// // expresion
​
// const imprimir = function () {
//   return sumar(4, 2);
// };
​
// console.log(imprimir); // fn
// console.log(imprimir());
​
// console.log(sumar(1, 2)); //
​
//? valor / referencia
​
let a = 4;
let b = {nombre: "gama"};
​
console.log(a);
console.log(b);
​
a = b;
​
console.log(b);
console.log(a);
​
b = 234;
​
console.log(b);
console.log(a);

console.log(`mi nombre es ${b.nombre}`);

