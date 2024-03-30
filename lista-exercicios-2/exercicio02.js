/*
02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie
sua própria função para isso.
*/

let array = []

function arrayVazio3 (numA, numB, numC){
    
    array.push(numA, numB, numC);

    if (numA < numB && numB < numC) {
        console.log(`${numA}, ${numB}, ${numC}`)
    }
    
    if (numA > numB && numB > numC) {
        console.log(`${numC}, ${numB}, ${numA}`)
    }

    if (numC > numA && numA > numB) {
        console.log(`${numB}, ${numA}, ${numC}`)
    }

    if (numB > numC && numC > numA) {
        console.log(`${numA}, ${numC}, ${numB}`)
    }
}



arrayVazio3(1,5,3)