//โปรดดูคำอธิบาย ที่ไฟล์ BossPractice_TestCase.js
export default function analyzeText(text,keyword){
    let word = text.split(" ")
    let want_keyword = {}
    for(let item of keyword){
        want_keyword[item] = (want_keyword[item] || 0) + 1;
    }
    return want_keyword
}