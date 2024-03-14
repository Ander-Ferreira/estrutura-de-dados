function Book(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
    this.printIsbn = function(){
        console.group('ISBN: ' + this.isbn)
    }
}

//para instanciar essa classe, podemos usar o código a seguir:
var book = new Book('Estrutura de Dados', 406, '20-05-2003')

//Acessando suas propriedades

console.log(book.title) //exibe o título do livro

book.title = 'Estrutura de Dados e algoritmos com Javascript' //Atualiza o valor do título

console.log(book.title) //exibe o valor atualizado

console.log('Este livro possui: ' + book.pages + ' páginas')

Book.prototype.printTitle = function(){
    console.log(this.title);
}

//Imprimindo o título do book como uma função

book.printTitle()


//Imprimindo o título do book da função adulta
book.printIsbn()

