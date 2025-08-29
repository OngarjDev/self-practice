const words = ['mangosteen','orange','apple','mangosteen','mango']
//1. annonymous arrow function
// const shortWords = words.filter((word) => word.length <= 6);// filter create new array ดังนั้นแล้ว words จะไม่เปลี่ยนค่า
//2. annonymous function declaration
// const shirtWords = words.filter(function (word){
//     return word.length < 6
// })
//3. reuse callback function (named function)
function wordLength(word){
    return word.length <= 6
}
const shortWords = words.filter(wordLength) //เราใส่แค่ชื่อfunction
console.log(words)
console.log(shortWords)


const sortedWords = words.sort()
console.log(words)
console.log(sortedWords)/// .sort() change original array    


const words_V2 = ['mangosteen','orange','apple','mangosteen','mango']
console.log(words_V2.map(word => word.toLocaleUpperCase()))


const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

console.log(students.map(Element => Element.id))
console.log(students.filter(Element => Element.id % 2 === 0).map(Element => Element.id)) //filter even id only