const booksByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books:[
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

console.log(booksByCategory.length)

for (livros of booksByCategory){
    console.log("Tem os livros da", livros.category, "⬇")
    console.log(livros.books.length)
}

function contAuthors(){
    let authors = [];
    
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
 console.log("A quantidade de autores são:", authors.length)
}

function booksOfAuthor(author){
    let books = [];
    
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
 console.log(`livro do autor ${author}: ${books.join(", ")}`)
}

contAuthors()
booksOfAuthor("Stephen R. Covey")

