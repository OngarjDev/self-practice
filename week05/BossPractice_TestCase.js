// โจทย์: Text Analyzer Pro 🧠✨ ระดับ กลาง-ยาก
// ให้เขียนฟังก์ชัน analyzeText(text, keywords) ที่ทำงานดังนี้:
// 1. นับความถี่ของคำ
// ตัดประโยคเป็นคำ (split ตามช่องว่าง " ")
// แปลงเป็น lower-case
// สร้าง JSON ที่เก็บความถี่ของคำทั้งหมด เช่น
// {
//   "today": 2,
//   "is": 2,
//   "a": 1,
//   "gift": 1
// }
// 2. หาคำที่ปรากฏครบทุก keyword (เหมือน minWindow substring idea)
// ให้ keywords เป็น array ของคำ เช่น ["today", "gift"]
// ให้หาช่วงที่สั้นที่สุดใน text ที่มีคำทั้งหมดใน keywords (เหมือน minWindow แต่ทำกับคำแทนตัวอักษร)
// 3. คืนค่าเป็น JSON สรุป
// จำนวนคำทั้งหมด
// ความถี่ของแต่ละคำ (ข้อ 1)
// ช่วงสั้นที่สุดที่มีครบทุก keyword (ข้อ 2)

// Example
// Input
// let text = "Today is a gift Today is present and present is your gift";
// let keywords = ["today", "gift"];
// console.log(analyzeText(text, keywords));

// Output (ตัวอย่าง)
// {
//   "totalWords": 11,
//   "wordFrequency": {
//     "today": 2,
//     "is": 3,
//     "a": 1,
//     "gift": 2,
//     "present": 2,
//     "and": 1,
//     "your": 1
//   },
//   "shortestWindow": "Today is a gift"
// }
import analyzeText from './BossPractice_IntegateAllweek.js'

// 🔹 Testcase 1: ตัวอย่างจากโจทย์
let text1 = "Today is a gift Today is present and present is your gift";
let keywords1 = ["today", "gift"];
console.log("Testcase 1:", analyzeText(text1, keywords1));
// Expected Output:
// {
//   totalWords: 11,
//   wordFrequency: {
//     today: 2,
//     is: 3,
//     a: 1,
//     gift: 2,
//     present: 2,
//     and: 1,
//     your: 1
//   },
//   shortestWindow: "Today is a gift"
// }

// 🔹 Testcase 2: ไม่มี keyword ที่เจอในข้อความ
let text2 = "Banana Apple Mango";
let keywords2 = ["orange", "grape"];
console.log("Testcase 2:", analyzeText(text2, keywords2));
// Expected Output:
// {
//   totalWords: 3,
//   wordFrequency: { banana: 1, apple: 1, mango: 1 },
//   shortestWindow: ""   // ไม่มี window ที่มีครบ keyword
// }

// 🔹 Testcase 3: ข้อความซ้ำหลายครั้ง
let text3 = "data science is fun and data is powerful science is everywhere";
let keywords3 = ["data", "science", "is"];
console.log("Testcase 3:", analyzeText(text3, keywords3));
// Expected Output (ตัวอย่างคร่าว ๆ):
// {
//   totalWords: 11,
//   wordFrequency: { data: 2, science: 2, is: 2, fun: 1, and: 1, powerful: 1, everywhere: 1 },
//   shortestWindow: "science is fun and data"   // หรือสั้นกว่านี้ตามที่ฟังก์ชันหาได้
// }

// 🔹 Testcase 4: case-insensitive (ตัวพิมพ์เล็ก-ใหญ่ไม่ต่างกัน)
let text4 = "JavaScript javascript JAVASCRIPT is cool";
let keywords4 = ["javascript", "cool"];
console.log("Testcase 4:", analyzeText(text4, keywords4));
// Expected Output:
// {
//   totalWords: 5,
//   wordFrequency: { javascript: 3, is: 1, cool: 1 },
//   shortestWindow: "javascript is cool"
// }

// 🔹 Testcase 5: ข้อความสั้น ๆ ที่ keyword ครบในบรรทัดเดียว
let text5 = "AI is future";
let keywords5 = ["ai", "future"];
console.log("Testcase 5:", analyzeText(text5, keywords5));
// Expected Output:
// {
//   totalWords: 3,
//   wordFrequency: { ai: 1, is: 1, future: 1 },
//   shortestWindow: "AI is future"
// }