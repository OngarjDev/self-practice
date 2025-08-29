function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) { // เช็ค True กับ False 
        return undefined
    }

    let destruction = sentence.split(" ")//แยกแต่ละคำ ทำให้มันเป็นสมาชิก ของ Array

    let word = []//เก็บคำที่ได้
    let number = []//เก็บจำนวนคำที่เจอ
    for (item of destruction) {//เมื่อเราแยกคำในประโยคมาแล้ว
        if(word.find(w => w.toLowerCase() === item.toLowerCase())){//ตรวจสอบว่าitem เป็นคำที่ตรงกับ สมาชิกที่อยู่ใน word ไหม
            continue;
        }


        let DuplicateObj = 0;
        for (xitem of destruction) {//loop อีกรอบเพื่อหา 
            if (item.toLowerCase() === xitem.toLowerCase() || item.toUpperCase() === xitem.toUpperCase()) {
                DuplicateObj += 1
            }
        }

        word.push(item)//เก็บไว้ในarray
        number.push(DuplicateObj)
    }
    let result = {}
    word.forEach((word,index) => { // ทำเป็น obj โดยบรรจุ คำ และ จำนวนที่พบ
        result[word] = number[index]
    });

    return result
}
console.log(getFreqOfWords("Today is present and present is your gift"));