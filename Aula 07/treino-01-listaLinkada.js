function listaLinkada() {
    let length = 0
    let inicio = null

    let Node = function (element) {
        this.element = element
        this.next = null


    }
    this.add = function (element) {
        let node = new Node(element)
        if (inicio === null) {
            inicio = node
        }

        else {
            let atual = inicio
            while (atual.next) {
                atual = atual.next
            }
            atual.next = node

        }
        length++
    }

    /*this.remove = function(element){
        let currentNode = head
        let previousNode

        if(currentNode.element === element){
            head = currentNode.next
        }
        else{
            while(currentNode.element !== element){
                
                previousNode = currentNode
                currentNode = currentNode.next
                previousNode.next = currentNode.next 



            }
            length --
        }
    }
    */

   this.remove = function(element){
    let atual = inicio
    let anterior
    
    if(atual.element === element){
        inicio = atual.next
    }
    else{
        while(atual.element !== element){
            anterior = atual
            atual = atual.next
        }
        anterior.next = atual.next

    }
    length--
   }

   this.isEmpty = function(){
    return length === 0
   }

   this.indexOf = function (element){
     let atual = inicio

     let indice = -1

     while(atual){
        indice++
        if(atual.element === element){
            return indice
        }
        atual = atual.next
        
     }

     return -1
   }
   

   
}



