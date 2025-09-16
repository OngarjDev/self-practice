function populateArray(length,value){
        let new_arr= new Array (length);
        return new_arr.fill(value)
}
console.log(populateArray(3, 'a')) // ['a', 'a', 'a']
console.log(populateArray(5, 0)) // [0, 0, 0, 0, 0]