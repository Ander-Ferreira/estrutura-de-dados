    /*
01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não
use o método sort.
*/


let array = []

function arrayVazio (numA, numB){
    array.push(numA)
    array.push(numB)
    
    

    array.push(numA)
    array.push(numB)
    

    


    if(numA > numB){
        console.log(`${numA} é maior do que ${numB}`)

    }

    if(numA < numB){
        console.log(`${numB} é maior do que ${numA}`)
    }
    

}

arrayVazio(1, 2)



