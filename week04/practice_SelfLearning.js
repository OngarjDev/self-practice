// 76. Minimum Window Substring โจทย์ยากจาก LeetCode
// Hard
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// var minWindow = function(s, t) {
//     let letter = [...s]
//     let need = [...t]

//     let obj_need = {}
    
//     for (let count_letter of need){
//         if(Object.keys(obj_need).find(l => l.toLowerCase() === count_letter.toLowerCase())){
//             obj_need[count_letter] += 1;
//         }else{
//              obj_need[count_letter] = 1;
//         }
//     }
//     let obj_have = {}
//     for (let left = 0;left < letter.lenght;left++){
//         for (let right = 0;right < letter.lenght;right++){
//             if(Object.keys(obj_have).filter(x=> x.))){
//                 obj_have[letter[right]] += 1;
//                 if(obj_have[letter[right]] === obj_need[letter[right]]){
//                     continue;
//                 }
//             }

            
//         }
//     }

    
//     let word_min = []
//     for (let word of result){
//         if(word.length < word_min.length || word_min === []){
//             word_min = word
//         }
//     }
//     return word_min;
// };




/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    // 1️⃣ สร้าง map ของตัวอักษรที่ต้องการ
    let requiredChars = {};
    for (let char of t) {
        requiredChars[char] = (requiredChars[char] || 0) + 1;
    }

    let windowChars = {}; // map ตัวอักษรใน window ปัจจุบัน
    let satisfiedCount = 0; // จำนวนตัวอักษรที่ครบตาม need
    let requiredUniqueCount = Object.keys(requiredChars).length;

    let windowStart = 0;
    let minSubstring = "";
    let minLength = Infinity;

    // 2️⃣ เลื่อน pointer ขวา
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let charEnd = s[windowEnd];
        windowChars[charEnd] = (windowChars[charEnd] || 0) + 1;

        // 3️⃣ ถ้าเจอตัวครบตาม need
        if (requiredChars[charEnd] && windowChars[charEnd] === requiredChars[charEnd]) {
            satisfiedCount++;
        }

        // 4️⃣ shrink window ทางซ้าย ถ้า valid
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

    return minSubstring;
};
