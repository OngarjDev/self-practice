function findValue(arr){
    let result = {}
    result["min"] = arr.reduce((acc,value) => acc > value?value:acc);
    result["max"] = arr.reduce((acc,value) => acc < value?value:acc);
    result["sum"] = arr.reduce((acc,value) => acc += value);
    result["arg"] = result["sum"] / arr.length
    return result
}
console.log(findValue([1,2,3,4]))