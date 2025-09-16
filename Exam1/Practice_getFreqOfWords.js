function getFreqOfWords(sentence){
    if(sentence === null || sentence === undefined){
        return undefined;
    }
    let word = sentence.split(" ")
    let result = {}
    for (let i = 0 ; i < word.length ; i++){
        result[word[i]] = i === 1 ? 1 : 0;
        if(Object.keys(result[word[i]]).toUpperCase() === word[i].toUpperCase()){
            result[word[i]] += 1;
        }else{
            result[word[i]] = 1;
        }
    }
    return result
}
console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords('Do you best just do it'));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined))