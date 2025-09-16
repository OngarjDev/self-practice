function findMax(arr) {
    return arr.reduce((acc = Infinity, value) => acc = acc < value ? value : acc);
}
console.log(findMax([1, 2, 3, 4])) // 4
console.log(findMax([10, 5, 8, 7])) // 10