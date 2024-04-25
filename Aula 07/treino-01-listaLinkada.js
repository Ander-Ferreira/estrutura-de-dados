function listaLinkada(){
    let length = 0
    let head = null

    let Node = function(element){
        this.element = element
        this.next = null
    }

    this.add = function(element){
        let node = new Node(element)

        if(head === null){
            head = node
        }
        else{
            let currentNode = head

            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node
        }

        length++

    }
}

