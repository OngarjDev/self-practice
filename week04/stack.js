const arr = ["animal","Test"]
// arr[arr.length] = "Test2"
console.log(arr.unshift("Front"))
console.log(arr)
console.log(arr.shift())
console.log(arr)


//shift คือเอาออกด้านหน้า เหมือน pop วิธีการจำคือ shiftหาย
//unshift คือ เอาใส่ด้านหน้า เหมือน push วิธีการจำคือ unshiftไม่หาย