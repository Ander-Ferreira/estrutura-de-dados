/*
05. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array
com os números de Fibonacci. Exiba o resultado usando o método join.
*/


function fibo(num1, num2){
const fibonacci = []

fibonacci.push(num1)
fibonacci.push(num2)

for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - i] + fibonacci[i - 2]

}

console.log(fibonacci.join('-'))

}

fibo(5,6)


