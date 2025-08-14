//obj can keep data and function , Where have data function can keep. 
let obj = {name: "Ongarj",email: "1234@kmutt.ac.th",formula: function minmax(){console.log("HelloTest")}}
let classroom = {student: {name: "Ongarj",email: "1234@kmutt.ac.th"},place: "Samut Sakon",username(){return this.student.name }}
console.log(classroom)

//access to obj
const book={isbn:12345678, title:'Introduction to JS',authors:[{firstname:'John'}, {lastname:'Smith'},{firstname:'Danial'}, {lastname:'Doh'}], versions:[1.0, 2.0,3.0], isAvailable:true, getISBN(){return this.isbn}}
console.log(Object.values(book.authors))
const DuplicateObj = {name:"ongarj",name:"John Mirash",age:19,Brith:new Date(1998,15,24).toString()}
console.log(DuplicateObj);


delete DuplicateObj["age"]
console.log(DuplicateObj)

// construtor func 
function Book(isbn, title){
    this.isbn = isbn
}
// getset and class decalation
class BookWelearn{
    constructor(isbn,title){
        this.isbn = isbn
        this.title = title
    }
    getISBN(){
        return this.isbn
    }
    setTitle(title){
        this.title = title
    }
    getBookInfo(){
        return `isbn: ${this.isbn}, title: ${this.title}`
    }
}

const myBook=new BookWelearn(12345678,'JS Beginner')
console.log(myBook.getBookInfo())
console.log(myBook.getISBN())
console.log(myBook.setTitle('JS for Beginner'))
console.log(myBook.getBookInfo());

const journal = Object.create(myBook)
journal.ISSN = 587904
console.log(journal)
console.log(journal.isbn)
console.log(journal.title)


///เปรียบเทียบว่าค่าตรงกันหรือไม่
const b1={id:1, title: "JS"}
const b2={id:1, title: "JS"}

function compareBook(x,y){
    if(x.isbn === y.isbn){
        return true
    }
    else{
        return false
    }
}
console.log(compareBook(b1,b2))
console.log(Object.values(b1) == Object.values(b2));

/// ความรู้ใหม่ คือถ้าเราอยากเก็บแค่เฉพาะบาง propety ของ value เราสามารถ ใส่ content: ได้ เพียงแค่ต้องเข้าถึงให้ถูก
const msg = {
    sender : 'Somsak' ,
    recipient : 'Pornsuda',
    content: {
        header: 'Reminder our party' ,
        body: 'let see you in the party'
    }
}
const {content: { header } } = msg
console.log(header) //Reminder our party