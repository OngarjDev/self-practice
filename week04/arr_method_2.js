// const words = ["Mango","Apple","mangosteen","orange","mangoes"]
// console.log(words.includes("Apple"))



// const sentence = "The quick brown fox jumps over the lazy dog."
// const word = "Ox"
// console.log(sentence.includes(word))


const words = ["Mango","Apple","mangosteen","orange","mangoes"]
console.log(words.find(Element => Element.toUpperCase() === "apple".toUpperCase()))



const product = [1, 'RED',102]
const productDetail = product. reduce ( (detail,prop) =>{
    return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
},'')

console.log(productDetail)