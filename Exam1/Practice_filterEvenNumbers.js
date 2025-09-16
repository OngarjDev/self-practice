function filterEvenNumbers(arr){
    return arr.filter(element => element % 2 === 0)
}
console.log(filterEvenNumbers([1, 2, 3, 4])) // [2, 4]
console.log(filterEvenNumbers([5, 6, 7, 8])) // [6, 8]