
function linkedList(){

    /*length é o tamanho da nossa lista e é = 0 pois nossa lista não possui nenhum elemento ainda, 
    então começamos com length = 0
    */

    var length = 0

    /*o head é igual a null porque quando nossa lista é recém criada, não tem valores, então o head sempre começa como null ou undefined
    */
    
    var head = null

    //Cada nó (Node) possui um valor (element) , e uma referência (next) para o próximo nó

    var Node = function(element){

        //Elemento é o valor do Node

        this.element = element

        /*Next é o ponteiro que apontará para o próximo nó, sempre será inicializado
         como null por que é uma prática comum indicar que não haverá um próximo nó, 
         enquanto o próximo nó não for criado.
        */

        this.next = null
    }

    //Função simples para mostrar o tamanho

    this.size = function (){
        return length
    }

    //Função simples para retornar o valor de head

    this.head = function(){
        return head
    }

  //FUNÇÃO PARA ADICIONAR NOVOS NÓS COM VALORES (element)

  this.add = function(element){
    
    //Criamos um novo node com este elemento em mente

    var node = new Node(element)
    
    //fazemos uma verificação para ver se head está null

    if(head === null){
       
        //se head for null, apontaremos para o próximo nó com elemento

        head = node

    }

    //fazemos uma verificação para ver se há mais de um elemento na lista

    else{
        
        //Se houver mais de um elemento, o currentNode que criamos irá iniciar a busca a partir do nó inicial da lista, o head
        
        var currentNode = head
        
        /*Agora quero que enquanto o currentNode apontar para outro nó, ele não seja null, e sim que tenha o próximo
        nó como referência*/
        
        while(currentNode.next){
            currentNode = currentNode.next
        }
        //Quando chegarmos ao fim da lista, aí sim adicionaremos o próximo valor (element) com node que criamos

        currentNode.next = node
    }
    
    /*Agora que todas as nossas condições foram cumpridas, 
    basta incrementar o tamanho da nossa lista para comportar o novo valor
    */

    length++
  }

  //FUNÇÃO PARA REMOVER VALORES
  
  this.remove = function(element){
    
    //Começaremos percorrendo os valores pelo início, então currentNode será = head

    var currentNode = head

    //PreviousNode será usado para manter a referência para o nó anterior ao nó que será removido

    var preivousNode

    //Verificaremos se o currentNode.element é igual ao element que procuramos

    if(currentNode.element === element){
        
        //Se o currentNode que queremos remover for o head, já apontaremos para o próximo node.
        
        head = currentNode.next
    }
    
    //Agora se o head node não for o que procuramos para remover
    
    else{

        //Enquanto o currentNode.element não for igual ao element que queremos

        while(currentNode.element !== element){
           
            //Dentro do loop, previousNode é atualizado para ser o nó atual (currentNode)

            preivousNode = currentNode

            //Depois disso currentNode é atualizado para ser o próximo nó da lista, tornando o previousNode o nó sempre anterior

            currentNode = currentNode.next

            /*
            Quando o loop termina, previousNode aponta para o nó imediatamente anterior ao nó que contém o elemento a ser removido, e currentNode aponta para o nó que contém o elemento a ser removido.
            */
            
            
        }
        
        /*Depois do elemento ser removido, o previousNode.next apontará para o nó (currentNode.next) que fica depois do nó que foi removido, assim removendo o nó desejado da lista.
        */

        preivousNode.next = currentNode.next //com isso faço um pulo de node exemplo 1 2 3 o previous está no 1, e vai diretamente par ao 3

    }

    //Depois de todas as condições terem sido cumpridas, diminuímos o tamanho desta lista
    length--
  }


  //CHECA SE A LISTA LINKADA ESTÁ VAZIA
  this.empty = function(){ 
    return length === 0 //se tiver vazia retorna 0

  }

  //RETORNA O INDEX DA LISTA LINKADA
  this.indexOf = function(element){ 
    let currentNode = head
    let index = -1 // o index sempre começará como -1, para ir passando pelos indices 0, 1, 2 e assim por diante 

   //Agora quero que enquanto o currentNode não for null
    while(currentNode){
        index++ //O index irá incrementar e assim avançar de índice em índice pelos nós
        
        //Agora quero que se o currentNode.element for igual ao element que passei
        if(currentNode.element === element){
            return index //Retorne o index
        }

        //Se o currentNode não for igual ao element
        currentNode = currentNode.next
    }

    //Se não for achado o element no loop while, retornaremos -1 (false)

    return -1
    
  }
//RETORNA O ELEMENTO DO ÍNDICE (INDEX) QUE PASSAMOS QUE PASSAMOS
this.elementAt = function (index){
    let currentNode = head //Começamos do início
    
    //O contador começará do indice 0, quero que enquanto o count (contador) for menor do que o número do indice que passei
    //Que ele incremente e avance de indice em indice
    for(count = 0; count < index; count++){

       //E também quero que o currentNode avance junto com o (indice) index
        let currentNode = currentNode.next


    }
    //Quando encontrarmos o index (indice) com o laço for, quero que passe o element (elemento) do currentNode que está naquele indice
    return currentNode.element
}

//ADICIONA UM ELEMENTO AO INDEX (INDICE) QUE EU QUERO

this.addAt = function(index, element){ //Passo o indice e o elemento como parametros porque quero adicionar o elemento baseado no indice que passei

//Como quero adicionar, sempre preciso criar um node herdando a estrutura do Node que já fizemos lá em cima
let node = new Node(element)

//Preciso do previousNode também
let previousNode

let currentIndex = 0

//Faço uma verificação para ver se o index (indice) que passei é maior do que o número de indices da lista

if(index > length){
    return false
}

//Faço uma verificação para ver se o index que passei é o primeiro
if(index === 0){
    
    //Se for, quero que conecte o novo node ao currentNode
    node.next = currentNode
   
    //Agora precisamos atualizar o ponteiro inicial para apontar para o novo nó adicionado
    head = node
}
else{ //Se não for o index que passamos
    
    while(currentIndex < index){//Enquanto o currentIndex for menor do que o index que passamos
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next

    }
    //Depois do loop ter achado o indice, adiciono o novo nó ao currentNode
    node.next = currentNode
    
    //Atualizamos o previousNode para apontar para o novo nó, inserindo-o na posição correta da lista.
    previousNode.next = node
}
//Incremento o tamanho da nossa list apara comportar o novo node
length ++
}

}