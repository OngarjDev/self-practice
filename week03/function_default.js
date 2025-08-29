function greeting(greet = "Hello", whom = "Guest" , quote = "How are you?"){//หลักการทำงานคือถ้าไม่ได้ส่งค่าไปให้ function มันจะใช้ค่า default แทน
    return `${greet} ${whom} ${quote}`
}
console.log(greeting('hi'))
console.log(greeting('Good morning', "Guy" , 'Great!'))
console.log(greeting(undefined, null , 'Fine'))
console.log(greeting())
