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

    this.remove = function (element) {
        let atual = inicio
        let anterior

        if (atual.element === element) {
            inicio = atual.next
        }
        else {
            while (atual.element !== element) {
                anterior = atual
                atual = atual.next
            }
            anterior.next = atual.next

        }
        length--
    }

    this.isEmpty = function () {
        return length === 0
    }

    this.indexOf = function (element) {
        let atual = inicio

        let indice = -1

        while (atual) {
            indice++
            if (atual.element === element) {
                return indice
            }
            atual = atual.next

        }

        return -1
    }

    this.elementAt = function (index) {
        let atual = inicio

        for (contador = 0; contador < index; contador++) {
            let atual = atual.next
        }

        return atual.element
    }

    this.addAt = function (index, element) {

        let atual = head
        let anterior
        let indexAtual = 0

        let node = new Node(element)

        if (index > length) {
            return false
        }


        if (index === 0) {
            node.next = atual
            head = node
        }

        else {
            while (indexAtual < index) {
                indexAtual++
                if (indexAtual === index) {
                    anterior = atual
                    atual = atual.next
                }
                node.next = atual
                anterior.next = node
            }
        }
        length ++


    }



}



