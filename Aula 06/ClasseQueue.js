

/*
class Queue {
    constructor(){
        //propriedade count para controlar o tamanho da fila
    this.count = 0
    //como removeremos da frente da fila, a propriedade
    //lowerCount para manter o controle (índice) do primeiro elemento
    this.lowestCount = 0
    //usaremos um objeto para armazenar elementos na fila
    this.items = {}
    }
    enqueue(element){ //garante que o elemento vá para o final da fila
        this.items[this.count] = element //this.count receberá o elemento para percorrer o array
        this.count++ //this.count começará a percorrer o array de um em um
    }
}
*/


class Queue {
    constructor(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
        
    }
    enqueue(elements){

    }
    size(){
        //retorna o tamanho da fila
        return this.count - this.lowestCount //retorna o menor índice da fila
    }
    isEmpty(){
        //checa se está vazio e retorna true
        return this.size() === 0 
    }
    dequeue(){
        //remove o elemento da frente da fila
        if(this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        // Armazenando o valor da frente da fila
        const result = this.items[this.lowestCount];
        // Removendo o elemento da frente
        delete this.items[this.lowestCount];
        // Incrementando a propriedade lowestCount
        this.lowestCount++;
        return result;
    }
    peek(){
        //mostra o elemento da frente da fila
        if(this.isEmpty()){
            return undefined

        }
        return this.items[this.lowestCount]
    }
    clear(){
        //para limpar a fila
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    clear(){
        //para limpar a fila
    }
    toString(){
        //para imprimir a fila
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[this.lowestCount]}` //primeiro da fila
        for(let i = this.lowestCount + 1; i < this.count; i++){ //segundo da fila
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
    enqueue(element){ //garante que o elemento vá para o final da fila
        this.items[this.count] = element //this.count receberá o elemento para percorrer o array
        this.count++ //this.count começará a percorrer o array de um em um
    }
    
}


const fila = new Queue()
console.log(fila.isEmpty())

//Adicionando duas pessoas na fila
fila.enqueue('John')
fila.enqueue('Jack')
console.log('A fila possui inicialmente as pessoas: ' + fila.toString())

//vamos acrescentar outra pessoa na fila
fila.enqueue('Camila')
console.log('A fila agora possui as pessoas: ' + fila.toString()) //John, Jack, Camila
console.log('O tamanho da fila agora é: ' + fila.size()) //exibe 3
console.log('Removendo a pessoa da frente da fila: ' + fila.dequeue()) //John
console.log('A fila agora possui os elementos: ' + fila.toString()) //Jack, Camila
console.log('A pessoa da frente da fila agora é: ' + fila.peek()) //Jack
console.log('Retirando o próximo da fila: ' + fila.dequeue()) //Jack
console.log('A fila agora possui apenas: ' + fila.toString()) //Camila
console.log('A pessoa da frente da fila agora é: ' + fila.peek()) //Camila

//Classe Deque -> Fila de duas pontas

class Deque {
    constructor(){
        //propriedade count para controlar o tamanho do deque
        this.count = 0
        //lowestCount para manter o controle(indice) do primeiro elemento
        this.lowestCount = 0
        //objeto items para armazenar elementos no deque
        this.items = {}
    }
    addFront(element){ //adiciona um novo elemento na frente do deque
        
    //primeiro cenário verifica se o deque está vazio
    if(this.isEmpty()){
        //meste caso chamamos o método addBack (no final do deque)
        this.addBack(element)
    
        }
    else if (this.lowestCount > 0){
        //o elemento é removido da frente do deque
        this.lowestCount--
        this.items[this.lowestCount] = element
    }

    else{
        //se lowestCount é igual a zero para adicionar um novo elemento
        //na primeira posição, devemos mover para próxima posição e deixar
        //o primeiro index livre
        for (var i =  this.count; i > 0; i--){
            this.items[i] = this.items[i - 1]
        }
        this.count++
        this.lowestCount = 0
        this.items[0] = element
    }
    

    }
    addBack(element){ //adiciona um novo elemento no fim do deque
        this.items[this.count] = element
        this.count++

    }
    removeFront(){//remove o primeiro elemento
        if(this.isEmpty()){ //verofoca se a fila está vazia
            return undefined

        }
        //armazenando o valor da frente da fila
        const result = this.items[this.lowestCount]
        //removendo o elemento da frente
        delete this.items[this.lowestCount]
        //será necessário incrementar a propriedade lowestCount
        this.lowestCount++
        return result

    }
    peekBack(){//devolve o último elemento
        return this.items[this.items.length - 1]

    }
    peekFront(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }

    size(){//para retornar  o tamanho do deque
        return this.count - this.lowestCount

    }
    isEmpty(){//verifica se o deque está vazio
        return this.size() === 0

    }
    toString(){//apresenta o conteúdo do deque
        if(this.isEmpty()){
            return ''

        }
        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString 

    }
    
}

const deque = new Deque()
console.log(deque.isEmpty()) //exibe true
deque.addBack('João')
deque.addBack('Pedro')
console.log(deque.toString()) //João, Pedro
deque.addBack('Camila') //João, Pedro, Camila
console.log(deque.size()) //exibe 3
console.log(deque.isEmpty()) //exibe false
//deque.removeBack() //Camila decide sair
console.log(deque.toString())//Pedro
deque.addFront('João') //João retorna para pedir uma informação
console.log(deque.toString()) //João, Pedro






