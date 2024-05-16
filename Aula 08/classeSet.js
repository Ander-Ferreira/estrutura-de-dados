class Set{
    constructor() {
        this.items = {}
    }
    add(element){
        // Adiciona um novo elemento
        // Só adiciona se um elemento não existir
        if(!this.has(element)){
            this.items[element] = element
            return true
        }

        return false
    }
    
    delete(element){
        // Remove element do conjunto
        // Checa se existe o elemento primeiro
        
        if(this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }
    
    has(element){
        // Devolve true se elemento estiver no conjunto, e false caso contrário
        return element in this.items
    }
    
    clear(){
        // Remove todos os elementos do conjunto
        this.items = {}
    }
    
    size(){
        // Devolver quantos elementos estão contidos no conjunto
        // keys retorna as chaves dentro de um array
        return Object.keys(this.items).length
    }

    sizeLegacy(){
        // Mesma coisa do size, só que o código é feito manualmente
        let count = 0
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count++
            }
        }
        return count
    }
    
    values(){
        // Devolve um array com todos os valores (elementos) que estão no conjunto.
        return Object.values(this.items)
    }
 
    // Funções de Union

    union(otherSet){
        const unionSet = new Set()
        this.values().forEach((value) => unionSet.add(value))
        otherSet.values().forEach((value) => unionSet.add(value))
        return unionSet;
    }

    // Funções de intercessão

    Intersection(otherSet){
        const intersectionSet = new Set()
        const values = this.values()
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    otherInsersection(otherSet){
        const intersectionSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        let biggerSet = values
        let smallSet = otherValues
        if(otherValues.lenght - values.length > 0){
            biggerSet = otherValues
            smallerSet = values
        }
        smallerSet.forEach((value) => {
            if(biggerSet.includes(value)){
                intersectionSet.add(value)
            }
        })

        return intersectionSet
        
    }
}

// Teste

const set = new Set()
set.add(1)
console.log(set.values()) // Exibe [1]
console.log(set.has(1)) // Exibe true
console.log(set.size()) // Exibe 1
console.log(set.sizeLegacy()) // Exibe 1 também
set.add(2)
console.log(set.values()) // Exibe [1, 2]
console.log(set.has(1)) // Exibe true
console.log(set.sizeLegacy()) // Exibe 2
console.log(set.delete(1)) // Exibe true
console.log(set.values()) // Exibe [2]
console.log(set.delete(2)) // Exibe true
console.log(set.values()) // Exibe []
console.log(set.size()) // Exibe 0
console.log(set.sizeLegacy()) // Exibe 0


const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)

const intersectionAB = setA.Intersection(setB)
console.log(intersectionAB.values())




