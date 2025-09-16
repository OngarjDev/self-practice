function processNumbers(arr){
    return arr.filter(element => element % 2 !== 0).map(element => element ** 2)
    .reduce((acc,value) => acc += value);
}
console.log(processNumbers([1, 2, 3, 4])) // 10 (1^2 + 3^2)
console.log(processNumbers([5, 6, 7, 8])) // 74 (5^2 + 7^2)