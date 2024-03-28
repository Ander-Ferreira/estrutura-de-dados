/*
03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal
array. Modifique os elementos do array de modo a a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1
*/

let array = []
let recebendo = function (numA, numB, numC){
    
    array.push(numA, numB, numC)
    
    console.log(array)

    array.reverse()

    console.log(array)
    

}

recebendo(1, 2, 3)

