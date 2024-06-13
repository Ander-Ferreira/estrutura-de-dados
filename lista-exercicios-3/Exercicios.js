
const prompt = require('prompt-sync')({ sigint: true })

class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }

    toString() {
        return `[${this.key}]: ${this.value}`
    }
}

class Dictionary {
    constructor() {
        this.table = {}
    }

    defaultToString(key) {
        if (key === null) {
            return 'NULL'
        } else if (key === undefined) {
            return 'UNDEFINED'
        } else if (typeof key === 'string' || key instanceof String) {
            return `${key}`
        }
        return key.toString()
    }

    hasKey(key) {
        return this.table[this.defaultToString(key)] !== undefined
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.defaultToString(key)
            this.table[tableKey] = new ValuePair(key, value)
            return true
        }
        return false
    }

    remove(key) {
        const tableKey = this.defaultToString(key)
        if (this.hasKey(key)) {
            delete this.table[tableKey]
            return true
        }
        return false
    }

    get(key) {
        const tableKey = this.defaultToString(key)
        const valuePair = this.table[tableKey]
        return valuePair === undefined ? undefined : valuePair.value
    }

    keys() {
        return Object.keys(this.table)
    }

    keyValues() {
        return Object.values(this.table)
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value)
    }

    forEach(callbackFn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if (result === false) {
                break;
            }
        }
    }

    size() {
        return Object.keys(this.table).length
    }

    isEmpty() {
        return this.size() === 0
    }

    clear() {
        this.table = {}
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`
        }
        return objString
    }
}



const dictionary = new Dictionary('')

/*1. Faça um programa, utilizando Dicionários, que peça para o
usuário inserir o nome de 5 produtos de mercado e seus
respectivos preços e os mostre na tela. */

//DESCOMENTE AS CHAMADAS DE FUNÇÕES PARA EXECUTAR UMA DE CADA

function exercicio1(){

let i = 0
while (i <= 5) {
    let nome = prompt("Digite o nome do produto: ")
    let preco = prompt("Digite o preço do produto: ")
    dictionary.set(nome, preco);
    i++
}

console.log("Produtos e seus preços:")
    dictionary.forEach((key, value) => {
        console.log(`Nome: ${key}, Preço: ${value}`)
    })

dictionary.clear

}

exercicio1()



/*2. Faça um programa, utilizando Dicionários, que peça para o
usuário inserir quatro notas e mostre na tela as notas e a média
entre elas.*/

function exercicio2() {
    let soma = 0
    let contador = 0
    
    for (let i = 0; i < 4; i++) {
        let nota = parseFloat(prompt('Digite sua nota:'));
        dictionary.set(`nota${i}`, nota); // Armazena a nota no dicionário com uma chave única
    }
    
    dictionary.forEach((key, value) => {
        soma += value
        contador++
    })

    let media = soma / contador;
    console.log('Notas:', dictionary.values().join(', '))
    console.log('Média:', media);
    dictionary.clear
}

exercicio2()

/*3. Faça um programa, utilizando Dicionários, que:

1° Passo: Peça para o usuário inserir quatro coisas em
uma “Caixa Misteriosa” .

2° Passo: Peça para o usuário inserir um número.

3° Passo: Mostre na tela o que foi inserido na posição do
número inserido pelo usuário. */


function exercicio3() {
    const dictionary = new Dictionary();

    
    for (let i = 0; i < 4; i++) {
        let coisa = prompt(`Digite a ${i + 1}ª coisa: `);
        dictionary.set(i, coisa); 
    }

    
    let posicao = parseInt(prompt('Digite um número para escolher a posição: '))

    
    let item = dictionary.get(posicao);
    if (item !== undefined) {
        console.log(`O item na posição ${posicao} é: ${item}`)
    } else {
        console.log(`Não há item na posição ${posicao}.`)
    }
    dictionary.clear
}

exercicio3()


/*
4. Faça um programa, utilizando Dicionários, que:

1° Passo: Peça para o usuário inserir o nome de três
funcionários e os mostre na tela.

2° Passo: Peça para o usuário demitir um funcionário e
mostre na tela os funcionários restantes.
*/

function exercicio4() {
    
    console.log("Passo 1: Inserir o nome de três funcionários")
    
    for (let i = 1; i <= 3; i++) {


        let nomeFuncionario = prompt(`Digite o nome do ${i}º funcionário: `)

        dictionary.set(`Funcionário ${i}`, nomeFuncionario)

    }

    console.log("Funcionários inseridos:")
    console.log(dictionary.toString())

    
    let funcionarioDemitido = prompt("Digite o número do funcionário que deseja demitir (1, 2 ou 3): ")
    
    if (funcionarioDemitido >= 1 && funcionarioDemitido <= 3) {
        
        dictionary.remove(`Funcionário ${funcionarioDemitido}`)
        console.log(`Funcionário ${funcionarioDemitido} demitido com sucesso.`)
    } 
    
    else {
       
       
        console.log("Número de funcionário inválido. Nenhum funcionário demitido.")


    }

    
    console.log("Funcionários restantes:")
    console.log(dictionary.toString())

    dictionary.clear
}

exercicio4()











