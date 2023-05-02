let array = [['pera', 5], ['manzana', 7], ['banana', 12]];
console.log(array[1][0]); //'manzana'

function convertToInteger(str) {
    return parseInt(str,2) //covierte un numero binario a entero con base 2
}

console.log(convertToInteger("1011")); // los numeros binarios se resulven asi: 1 0 1 1
            //posiciones: 3 2 1 0
// para saber a cuanto equivale cada '1' porque los '0' no se toman en cuanta para realizar la operacion pero si su pocision, se tiene que multiplicar 1 por base 2 elevado a la posicion que ocupa el numero '1' contando de derecha a izquierda
// 1 0 1 1
// 3 2 1 0
// 1*2^3 + 1*2^1 + 1*2^0
// 1 * 8 + 1 * 2 + 1 * 1
// 8 + 2 + 1
// es igual a 11

//funcion recursiva que itera los n valores y los guarda en un array
function countdown(n){
  if(n < 1){
  return [];
  } else {
    let arrN = countdown(n - 1);
    arrN.push(n);
    return arrN;
  }
}
console.log(countdown(6));

//funcion que llena un array que en la primera posicion tenga el valor de 'startNum' y en la ultima posicion tenga el valor 'endNum'
function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
  return [];
  } else if(endNum === startNum){
    let myarr = rangeOfNumbers(startNum, endNum - 1);
    myarr.push(endNum);
    return myarr;
  } else{
    let myarr = rangeOfNumbers(startNum, endNum - 1);
    myarr.push(endNum);
    return myarr;
  }
};
console.log(rangeOfNumbers(0, 4));

function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2)
  .filter(value => !arr1.includes(value) || !arr2.includes(value));
  return 'el/los numeros que no comparten entre ' + arr1 + ' y '+ arr2 + ' es: ' + newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function destroyer(arr) {
    //Object.values(arguments).splice(1) guarda los argumentos retantes desde la posicion 1 hasta el final en la variable otherArguments
    let otherArguments = Object.values(arguments).splice(1);

    return arr.filter(value => !otherArguments.includes(value)); //filtra los elementos que no estan en otherArguments
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

