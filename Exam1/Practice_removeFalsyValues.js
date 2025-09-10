function removeFalsyValues(arr){

}
console.log(removeFalsyValues([0, 1, false, 2, '', 3])) // [1, 2, 3]
console.log(removeFalsyValues(['a', '', 'b', null, 'c'])) // ['a', 'b', 'c’]
console.log(removeFalsyValues([null, undefined, 'A'])) // ['A']