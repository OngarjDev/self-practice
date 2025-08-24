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