function listaLinkada2(){
    let inicio = null
    let length = 0

    let Node = function(element){
        this.element = element
        this.next = null

    }

    this.add = function(element){

        let node = new Node(element)

        let currentNode = inicio

        if(inicio === null){
            inicio = currentNode
        }
        else{
            currentNode = inicio

            while(currentNode.next){
                currentNode = currentNode.next
            }

            currentNode.next = node
            
        }

        length++

    }

    this.remove = function(element){
        let currentNode = inicio
        let previousNode

        if(currentNode.element === element){
            inicio = currentNode.next

        }

        else{
            while(currentNode.element !== element){
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next
        }
        length --
    }

    this.empty = function(element){
        return length === 0
    }

    this.indexOf = function(element){
        let currentNode = inicio
        let index = -1

       while(currentNode){
        index++

        if(currentNode.element === element){
            return index
        }

        currentNode = currentNode.next
       }

       return -1

        

    }

    this.elementAt = function(index){
        let currentNode = inicio
        for(contador = 0; contador < index; contador++){
            let currentNode = currentNode.next
        }
        return currentNode.element
    }

    this.addAt = function(index, element){
        let currentNode = inicio
        let currentIndex = 0
        let previousNode

        if(index > length){
            return false
        }

        if(index === 0){
            node.next  = currentNode
            head = node

       }

       else{
        while(currentIndex < index){
            currentIndex++
            previousNode = currentNode
            currentNode = currentNode.next
        }

        node.next = currentNode
        previousNode.next = node

       }
       length++
    }
}