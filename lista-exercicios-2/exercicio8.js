/*
08. Faça uma função para converter um número decimal em hexadecimal.
*/

function decimalBINARIO(numeroDECIMAL) {
    let arrayVazio = []
    let resto
    let hexadecimal = ''

    while (numeroDECIMAL > 0) {
        resto = numeroDECIMAL % 16;
        arrayVazio.push(resto);
        numeroDECIMAL = Math.floor(numeroDECIMAL / 16)
    }

    while (arrayVazio.length > 0) {
        hexadecimal += arrayVazio.pop().toString(16)
    }
    return hexadecimal;
}

console.log(decimalBINARIO(1010));