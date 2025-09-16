function squareNumbers(arr){
    return arr.map(element => element ** 2)
}
console.log(squareNumbers([1, 2, 3, 4])) // [1, 4, 9, 16]
console.log(squareNumbers([5, 6])) // [25, 36]