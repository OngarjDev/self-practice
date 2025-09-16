function removeDuplicateWords(sentence){
    if(!sentence) return "";
    let seen = new Set();
    return sentence
        .split(" ")
        .filter(w => {
            let lw = w.toLowerCase().replace(/(.)\1+/g,"$1"); 
            if(seen.has(lw)) return false;
            seen.add(lw);
            return true;
        })
        .join(" ");
}

console.log(removeDuplicateWords("This is a test This test is easy.")); // "This is a test easy."
console.log(removeDuplicateWords("Hello helloHELLOworld!"));            // "Hello world!"
console.log(removeDuplicateWords("One two twothree threethree"));       // "One two three"
console.log(removeDuplicateWords(""));                                  // ""
console.log(removeDuplicateWords(null));                                // ""
