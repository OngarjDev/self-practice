/*
Find the Longest Word
Write a function that takes a sentence (string) and returns the longest word in the sentence. The function should also handle edge cases as follows:
If the input is undefined, null, or not a string, the function should return an empty string "".
If the input string is empty, return an empty string "".
If multiple words share the longest length, return the first one that appears.
Count punctuation as part of the word (no cleaning required).
*/

function longestWord(sentence) {
    if (sentence === undefined || sentence === null || sentence == "" || typeof sentence !== "string") {
        return "";
    }
    let destruction = sentence.split(" ")
    let maxcount = 0;
    let index_maxword = 0;
    for (i=0;i<destruction.length -1;i++){
        if(i === 0){
            maxcount = destruction[i].length;
            index_maxword = i;
        }
        if(maxcount < destruction[i].length){
            maxcount = destruction[i].length;
            index_maxword = i;
        }
    }
    return destruction[index_maxword];
}

///test case
console.log(
    longestWord("The quick brown fox jumped over the lazy dog"),// should return "jumped".
    longestWord("JavaScript is super fun and powerful"),//should return "JavaScript".
    longestWord("Hi"),//should return "Hi".
    longestWord("Well, this test-case is tricky!"),//should return "test-case".
    longestWord(""),//should return "".
    longestWord(undefined),//should return "".
    longestWord(null),//should return "".
    longestWord(12345),//should return "".
    longestWord(["not", "a", "string"])//should return "".
)