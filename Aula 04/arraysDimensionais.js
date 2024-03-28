var tempoDia1 = [36.5, 28, 30, 25, 18, 40]
var tempoDia2 = [19, 22.5, 29, 31, 23.5, 32.5]

var tempoDia = []
tempoDia[0] = tempoDia1
tempoDia[1] = tempoDia2

function printMatrix(myMatrix) {
     for(let i = 0; i < myMatrix.lenght; i++) {
        for(let j = 0; j < myMatrix.lenght; j++){
            console.log(myMatrix[i][j])
        }
     }


}

printMatrix(tempoDia)

//Tridimensionais

const matrix3x3x3 = []

for(var i= 0; i < 3; i++) {
    matrix3x3x3[i] = [] //precisamos inicializar cada array
    for(var j = 0; j < 3 ; j++){
        matrix3x3x3[i][j] = []
        for(var z = 0; z < 3; z++){
            matrix3x3x3[i][j][z] = i + j + z
        }

    }
}
console.table(matrix3x3x3)

const zero = 0
const numerosPositivos = [1, 2, 3]
const numerosNegativos = [-3, -2, -1]

let numeros = numerosNegativos.concat(zero, numerosPositivos) //concat() concatena os arrays, junta

console.log(numeros.join(', ')) //.join(', ') imprime todos na mesma fileira


//vai iterar os elementos do array até ser false, ou seja, vai ser até o número ímpar

function eIgual(x){
    //devolve true e x para múltiplo de 2
    
    console.log(x)
    return(x % 2 === 0) ? true : false
}

let numbers = [1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

numbers.every(eIgual) //.every vai até encontrar o false

numbers.some(eIgual) //.some vai até encontrar o true

numbers.forEach(x => console.log(x % 2 === 0))

const myMap = numbers.map(eIgual)

console.log(myMap)


function eIgual(x){
    //devolve true e x para múltiplos de 2.
    //console.log(x)
    return (x % 2 === 0) ? true : false
}

const evenNumbers = numbers.filter(eIgual) //filtra

console.log(evenNumbers)

//reduce pegará todos os cáculos de um array e me gerará um único resultado
console.log(numbers.reduce((previous, current) => previous + current))// isso representa o somatório de todos os elementos

console.log(numbers.reduce((previous, current) => previous * current))// isso representa o produto de todos os elementos

console.log(numbers.reduce((previous, current) => previous - current))// isso representa o somatório de todos os núemros negativos


//outro método de percorrer um array com for

for(const n of numbers){
    console.log(n % 2 === 0 ? n +  " é par": n + " é impar")
}

//também percorre o array, mas em ordem, um número de cada

let iterator = numbers[Symbol.iterator]()

console.log(iterator.next().value) //1
console.log(iterator.next().value)//2
console.log(iterator.next().value)//3
console.log(iterator.next().value)//4
console.log(iterator.next().value)//5

//Apresenta todos os valores do array
for (const n of iterator){
    console.log(n)
}

//Retorna índice e valor

let aEntries = numbers.entries() // obtém iterador de chave/valor
console.log(aEntries.next().value)//[0, 1] posição 0, valor 1
console.log(aEntries.next().value)//[1, 2] posição 1, valor 2
console.log(aEntries.next().value)//[2, 3] posição 2, valor 3

//Mesmo método de cima, só que não preciso repetir 15 vezes o console.log, o for já irá percorrer os índices e valores
for(const n of aEntries){
    console.log(n)

} 

//Enquanto o array possuir números para percorrer, será false, o último elemento será true e undefined

const aKeys = numbers.keys()
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())


//inverter os arrays
numbers.reverse() //reverte os números
console.log('Array numbers com reverse: ' + numbers.join(', '))

numbers.sort() //sorteia os números, rearranja 
console.log('Array numbers com sort: ' + numbers.join(', '))

function compare(a, b){

   if(a < b){
    return - 1
   }

  if(a > b){
    return 1
  }
//a deve ser igual a b

}


numbers.sort(compare)
console.log('Array numbers executando a função compare: ' + numbers.join(', '))

let names = ['Maria', 'Angelica', 'Luiza', 'Kelly', 'Rafaela', 'Marcela', 'Beatriz']

console.log(names.sort().join(', ')) //sorteando










