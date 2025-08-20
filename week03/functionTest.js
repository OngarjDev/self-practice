function sum(x, y,...z) {
    let count = 0
    for (args of arguments) {
        count += args
    }
    // console.log(`check element: ${z}`)
    // console.log(`length: ` + arguments.length)
    return count
}
console.log(sum(1,2,3,4,5,6,7,8))



function greeting(greet = "Hello", whom = "Guest" , quote = "How are you?"){
    return `${greet} ${whom} ${quote}`
}
console.log(greeting('hi'))
console.log(greeting('Good morning', "Guy" , 'Great!'))
console.log(greeting(undefined, null , 'Fine'))
console.log(greeting())



function sum (num1, num2, num3){
    return num1 + num2 + num3
}
let nums = [5]
console . log (sum (...nums))


function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) {
        return undefined
    }

    let destruction = sentence.split(" ")

    let word = []
    let number = []
    for (item of destruction) {
        if(word.find(w => w.toLowerCase() === item.toLowerCase())){
            continue;
        }


        let DuplicateObj = 0;
        for (xitem of destruction) {
            if (item.toLowerCase() === xitem.toLowerCase() || item.toUpperCase() === xitem.toUpperCase()) {
                DuplicateObj += 1
            }
        }

        word.push(item)
        number.push(DuplicateObj)
    }
    let result = {}
    word.forEach((word,index) => {
        result[word] = number[index]
    });

    return result
}
console.log(getFreqOfWords("Today is present and present is your gift"));