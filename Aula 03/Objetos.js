
//Maneira de declarar uma classe (construtor) que representa um livro:

function Book (titulo, paginas, isbn) {
    this.titulo = titulo;
    this.paginas = paginas;
    this.isbn = isbn
    
    //Declarando uma função do método em privado, este método só ocorrerá aqui dentro
    this.imprimirIsbn = function() {
        console.log('Isbn: ' + this.isbn)
    }

}

//Para instanciar a classe podemos usar o código a seguir
var Book = new Book ('Estrutura de Dados', 406, '90-05-2003')

//Podemos também declarar uma função do método, veja:
Book.prototype.imprimirTitulo = function () {
    console.log(this.titulo)
}

//Acessando a propriedade

console.log(Book.titulo) //exibo o título do livro

Book.titulo = ('Estrutura de Dados e algoritmos com Javascript') //atualiza o valor do título

console.log(Book.titulo) //exibe o valor atualizado

console.log('Este livro possui: ' + Book.paginas + ' páginas')


//Acessando a função método

Book.imprimirTitulo()

//Acessando a função Isbn

Book.isbn()