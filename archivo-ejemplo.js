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