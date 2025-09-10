function getFreqOfWords(sentence){
    if(sentence === null || sentence === undefined){
        return undefined;
    }
    let word = sentence.split(" ")
    
}
console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords('Do you best just do it'));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined))