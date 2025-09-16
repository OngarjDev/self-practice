function extractAndRename(obj){
    let new_obj = {};
    new_obj["fullName"] = obj["name"];
    new_obj["yearOld"] = obj["age"];
    return new_obj;
}
console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))
console.log(extractAndRename({ name: 'Jane', age: 30 }))