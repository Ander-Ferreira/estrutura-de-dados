const tempo = []

//Preenchendo o array

tempo[0] = 31.9
tempo[1] = 30.7
tempo[2] = 28.5
tempo[3] = 27.8
tempo[4] = 25.6

console.log('Conteúdo do array: ', tempo);

console.log('Média de temperatura de março: ', tempo[2])

console.log('Média de temperatura de janeiro: ', tempo[0])

//Também podemos incializar o array com alguns elementos assim

let diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

//Agora vamos percorrer o array

for(let i = 0; i < diasDaSemana.length; i++) {

    console.log(diasDaSemana[i])

}

//Armazenando a série fibonacci no array com 20 elementos

const fibonacci = []

fibonacci[0] = 1
fibonacci[1] = 1

for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - i] + fibonacci[i - 2]

}

//se quiser imprimir no console, um elemento ao lado do outro

console.log(fibonacci.join(' - ')) //.join() concatena os elementos um ao lado do outro

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Atribuo um número no final do array
numbers[numbers.length] = 10;

console.log(numbers)

//Outro método para adicionar valors ao final da array
numbers.push(11)
numbers.push(12, 13)

console.log(numbers)

console.log(numbers.join(', '))

//Inserindo agora na primeira posição

function insertFirstPosition(value){
    for(let i = numbers.length; i>=0; i--){
        numbers[i] = numbers[i - 1];
    }
    numbers[0] = value

}

console.log(numbers.join(', '))

//Outro método para inserir números em outras posições, é semelhante ao método de cima

numbers.unshift(-1)
numbers.unshift(-2)
numbers.unshift(-4, -3)

//Apresenta no console
console.log(numbers.join(', '))


//Para remover o valor do final do array, podemos utilizar o método .pop()

numbers.pop()
console.log(numbers.join(', '))

//Para remover um valor do inicio do Array, podemos:

for(var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1]
}

console.log(numbers)

//Copiando todos os valores para outro array
//Diferente de undefined do array original

Array.prototype.reIndex = function(myArray) {
    const newArray = []
    
    for (var i = 0; i < myArray.length; i++) {
        if(myArray[i] !== undefined){
            //console.log(numbers[i])
            newArray.push(myArray[i])
        }

    }
    return newArray
}

//Remove a primeira posição manualmente e executa reIndex

Array.prototype.removeFirstPosition = function(){
    for(var i = 0; i < this.length; i++){
        this[i] = this[i + 1]
    }
    return this.reIndex(this)
}

numbers = numbers.removeFirstPosition()
//Apresentando o array numbers após a execução do método

console.log(numbers)


//Outro método para remover o elemento da primeira posição

numbers.shift()
console.log('O tamanho do array agora é: ' + numbers.length)
console.log(numbers.join(', '))


//removendo um elemento da primeira posição

numbers.shift();
console.log('O tamanho do array agora e: ' + numbers.length)
console.log(numbers.join(', '))

numbers.splice(5, 3)

//mostrando o conteúdo do array

console.log(numbers.join(', '))

//dá para inserir com slice também

numbers.splice(5, 0, 6, 7) //A partir do cinco, 0 não exclua, 6, 7 insira



















