/*07. Peça ao usuário uma quantidade de linhas e outra de colunas, depois declare tal matriz,
inicialize todos os elementos de 1 até 'linha x coluna'. Para preencher cada elemento use a
soma dos seus índices.*/


let arrayVazio = []
let array1 = [1, 2, 3, 4, 5]
let array2 = [1, 2, 3, 4, 5]
let soma = 0
let soma2 = 0

function somando(resultado){


for(let i = 0; i < array1.length; i++ ){
    soma += array1[i]
   

}

for(let j = 0; j < array2.length; j++){
    soma2+= array2[j]
}

resultado = soma + soma2
return resultado



}

let total = somando(arrayVazio)

console.log(total)



