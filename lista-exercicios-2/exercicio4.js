/*
04. Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os índices onde
esse número aparece no vetor, e não só apenas o primeiro e/ou último índice em que o
número aparece (como nos métodos indexOf e lastIndexOf).
*/


function vetor(num1, num2, num3, array){
    array = []
    array.push(num1, num2, num3)
    for(let i = 0; i < array.length; i++){
        console.log(`índice: ${i}, número: ${array[i]}`)

    }    

}

vetor(1, 2, 3)