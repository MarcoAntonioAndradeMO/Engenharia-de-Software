class Book {
    constructor(title,description,author){
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class Library {
    books = [];

    bookInfo = (book, id) => ({
        book: book,
        id: id
    })

    addBook(bookInfo){
        this.books.push(bookInfo);
    }

    getBooks(){
        return(this.books)
    }

    
    removeBookById(id){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id == id){
                this.books.splice(i, 1);
                break
            }
        }
    }

    getBookById(id){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id == id){
                 return this.books[i];
            }
        }
    }

    updateBookById(id,book){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id == id){
                if (book.title){
                    this.books[i].book.title = book.title
                }
                if (book.description){
                    this.books[i].book.description = book.description
                }
                if (book.author){
                    this.books[i].book.author = book.author
                }
            }
        }
    } 
}


// Testes
let livro1 = new Book ("Revolta de Atlas", "Ficção", "Ayn Rand")
let livro2 = new Book ("Caminho da servidão", "liberalismo", "F.Hayek" )
let livro3 = new Book ("Meditações", "Filosofia", "Marco Aurélio")

let library = new Library()

library.addBook(library.bookInfo(livro1,"1"))
library.addBook(library.bookInfo(livro2,"2"))
library.addBook(library.bookInfo(livro3,"3"))

console.log(library.getBooks())

console.log(library.getBookById("2"))

library.removeBookById("2")

console.log(library.getBooks)

library.updateBookById("3", new Book( "O Poder do Hábito", "Hábitos", "Charles Duhigg"))

console.log(library.getBooks())
