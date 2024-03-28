class Stack {
    constructor(){
    this.items = []

    }
    push(element){
        //Adiciona um elemento
        this.items.push(element)
    }
    pop(){
        //Retira um elemento do topo da pilha
        return this.items.pop()

    }
    peek(){
        //devolve o elemento que está no topo da pilha
        return this.items[this.items.lenght - 1]


    }
    isEmpty(){
        //Informa se as pilhas estão de vazias ou não
        return this.items.length === 0
    }
    clear(){
        //Limpa a pilha
        this.items = []

    }
    size(){
        //informa o tamnho da pilha
        return this.items.length
    }
    print(){
        //imprime a pilha no console
        console.log(this.items.toString())

    }
}

//Criando (instância) um objeto stack (pilha)
const stack = new Stack()
//verificando se a pilha está vazia
console.log(stack.isEmpty())

//Adicionado elementos no topo da pilha
stack.push(5)
stack.push(8)
console.log(stack.isEmpty())

//Exibindo elemento do topo da pilha
console.log(stack.peek()) //exibe 8 ***

stack.push(11)

console.log(stack.size()) //exibe 3

//Verificando se a pilha está vazia

console.log(stack.isEmpty()) //exibe false

stack.push(15)

//mostrando todos os elementos da pilha

stack.print()

//retirando dois elementos do topo da pilha
stack.pop()
stack.print()
stack.pop()
stack.print()

function decimalToBinary(decNumber){
    var restStack = new Stack()
    
    let rest, //vai guardar futuros valores
    binaryString = '' //vai guardar futuros valores

    while(decNumber > 0){
        //arredonda pra baixa e atribui o resto da divisão por 2
        rest = Math.floor(decNumber % 2)
        //acrescentando pilha
        restStack.push(rest)
        //arredonda para baixo e atribui o resultado da divisão por 2
        decNumber = Math.floor(decNumber / 2)
    }

    while(!restStack.isEmpty()){
        //retira o última da pulha e acrescenta à binaryString no formato
        binaryString += restStack.pop().toString()
    }
    return binaryString

}

//executando a função

console.log(decimalToBinary(10))
console.log(decimalToBinary(25))
console.log(decimalToBinary(233))
console.log(decimalToBinary(1000))



//



function binaryToDecimal(decNumber){
    var restStack = new Stack()
    
    let rest, //vai guardar futuros valores
    binaryString = '' //vai guardar futuros valores

    while(decNumber > 0){
        //arredonda pra baixa e atribui o resto da divisão por 2
        rest = Math.floor(decNumber % 16)
        //acrescentando pilha
        restStack.push(rest)
        //arredonda para baixo e atribui o resultado da divisão por 2
        decNumber = Math.floor(decNumber / 16)
    }

    while(!restStack.isEmpty()){
        //retira o última da pulha e acrescenta à binaryString no formato
        binaryString += restStack.pop().toString()
    }
    return binaryString

}

//executando a função

console.log(binaryToDecimal(1010))



const digitoshexa = '0123456789abcdef'










console.log(digitoshexa[15]) //digitohexa[] transforma  em array







