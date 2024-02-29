//document.write('Olá mundo!')

//Imprime no console do navegador

//console.log('Olá mundo!')

//Exibe um pop-up no navegador

//alert('Olá mundo!')

//Variáveis de vários tipos

const nome = 'Regiano Alves'
const idade = 52
const sabeJs = true

console.log(nome, idade, sabeJs)

//Comandos Úteis

//node nome-do-arquivo para rodar no node, node não aceita aspectos html ou dom
//cd para configurar o directório no terminal


//Exemplos de usos de váriáveis em javascript

var num = 1
num = 3
var price = 1.5
var myName = 'Regiano Alves'
var trueValue = true
var nullVal = null
var und

console.log('num: ' + num)
console.log('Meu nome: ' + myName)
console.log('trueValue: ' + trueValue)
console.log('price: ' + price)
console.log('nullVar: ' + nullVal)
console.log('und: ' + und)

//Escopos de Variáveis, globais e locais

var myVariable = 'global'
myOtherVariable = 'global'

function myFunction () {
    var myVariable = 'local'
    return myVariable
}

function myOtherFunction () {
    myOtherVariable = 'local'
    return myOtherVariable
    
}

console.log(myVariable)
console.log(myFunction())
console.log(myOtherFunction())
console.log(myOtherVariable)

//Aritiméticos

var num = 0
num = num + 2
num = num * 3
num = num / 2

//Operadires de atribuição

num ++ //Soma com o número da variável + 1
num --  // Retira -1 do número da variável
num += 1 // pega o número que já está na variável e soma com outro número.
num -= 2 //pega o número que já está na variável e diminiu.
num *= 3 //pega o número que já na variável e múltiplica por outro.
num /= 2 // pega o número que já está na variável e divide por outro.
num %= 3 //pega o número que já está na variável e obtém o resto da divisão com o outro número

console.log('num: ' + num)

//Operadores de comparação

console.log('num: ' + num)
console.log('num == 1: ' + (num == 1))
console.log('num === 1: ')
console.log('num != 1: ') + (num != 1)
console.log('num > 1 ' + (num > 1))
console.log('num < 1: ' + (num < 1))
console.log('num >= 1: ' + (num >= 1))
console.log('num <= 1: ' + (num <= 1))
console.log('true && false: ' + (true && false))
console.log('true || false: ' + (true || false))
console.log('!true: ' + (!true))

//Operadores bit a bit, compara bit por bit nos binários

console.log('5 & 1: ', (5 & 1))
console.log('5 | 1: ', (5 | 1))
console.log('~5: ',  (~5))
console.log('5 ^ 1: ',  (5 ^ 1))
console.log('5 << 1: ', (5 << 1))
console.log('5 >> 1', (5 >> 1))

//Operador typeof

var num = 0
console.log('typeof num: ', typeof num)
console.log('typeof Texto String: ', typeof 'Texto String')
console.log('typeof true: ', typeof true )
console.log('typeof [1, 2, 3]: ', typeof [1,2,3])
console.log('typeof {name: Pedro} :', typeof {name: 'Pedro'})

//True e False

function testTruthy(val) {
    return val ? console.log('true') : console.log('false')

}
testTruthy(true)// true
testTruthy(false)// false
testTruthy(new Boolean(false))// true, objeto é sempre true
testTruthy('') //false
testTruthy('Bom dia!') //true
testTruthy(new String('')) //true, objeto é sempre true
testTruthy(1) //true
testTruthy(-1) //true
testTruthy(NaN) //false
testTruthy(new Number(NaN)) //true (objeto é sempre true)
var obj = {name: 'João'}
testTruthy(obj) // true
testTruthy(obj.name) //true
testTruthy(obj.age) //age (propriedade não existe)






