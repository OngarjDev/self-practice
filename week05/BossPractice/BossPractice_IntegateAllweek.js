//โปรดดูคำอธิบาย ที่ไฟล์ BossPractice_TestCase.js
export default function analyzeText(text, keyword) {
    let word = text.split(" ")
    let want_keyword = {}
    let word_Frequency = {}
    let result = {}
    for (let item of keyword) {
        want_keyword[item] = (want_keyword[item] || 0) + 1;
    }

    result["totalWords"] = word.length;

    for (let item of word) {

        word_Frequency[item.toLowerCase()] = (word_Frequency[item.toLowerCase()] || 0) + 1;
    }
    result["wordFrequency"] = word_Frequency

    let windowChars = {};
    let satisfiedCount = 0;
    let requiredUniqueCount = word.length;
    let minSubstring = Infinity;
    for (let windowEnd = 0; windowEnd < word.length; windowEnd++) {
        let charEnd = word[windowEnd].toLowerCase();
        windowChars[charEnd] = (windowChars[charEnd] || 0) + 1;

        if (want_keyword[charEnd] && windowChars[charEnd] === want_keyword[charEnd]) {
            satisfiedCount++;
        }

        while (satisfiedCount === requiredUniqueCount) {
            let windowLen = windowEnd - windowStart + 1;
            if (windowLen < minLength) {
                minLength = windowLen;
                minSubstring = s.slice(windowStart, windowEnd + 1);
            }

            let charStart = s[windowStart];
            windowChars[charStart]--;
            if (requiredChars[charStart] && windowChars[charStart] < requiredChars[charStart]) {
                satisfiedCount--;
            }
            windowStart++;
        }

    }
    result["shortestWindow"] = minSubstring

    return result
}