/*
01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não
use o método sort.
*/


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


function arrayVazio (array, numeroA, numeroB){
    array = []
    
   /*
    var numA = 1
    var numB = 2
    
    array.push(numA, numB)
  */
  
    numeroA.push(numeroA)
    numberoB.push(numberoB)
    

    


    if(numeroA > numeroB){
        console.log(`${numA} é maior do que ${numB}`)

    }

    if(numeroA < numeroB){
        console.log(`${numB} é menor do que ${numA}`)
    }
    

}

arrayVazio(1, 2)



