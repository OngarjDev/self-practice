let questions_json = `{
  "questions": [
    {
      "id": 1,
      "title": "หาผลบวก",
      "description": "เขียนโปรแกรมรับตัวเลขสองจำนวน แล้วแสดงผลบวกของมัน",
      "example_input": [5, 7],
      "example_output": 12
    },
    {
      "id": 2,
      "title": "ตรวจสอบเลขคู่หรือคี่",
      "description": "เขียนโปรแกรมเพื่อตรวจสอบว่าตัวเลขที่รับมาเป็นเลขคู่หรือคี่",
      "example_input": 9,
      "example_output": "Odd"
    }
  ]
}`
let convertJson = JSON.parse(questions_json);
console.log(convertJson["questions"][0].description)//ผมแค่อยากพิสูจน์ว่า json เป็น stringจริงไหม

console.log(JSON.stringify(convertJson,["questions","id","title"],4))//ใน stringify ยังมี parameter ที่กำหนดได้อีก
