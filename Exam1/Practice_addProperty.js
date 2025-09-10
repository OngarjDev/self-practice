function addProperty(obj,key,value){
    obj[key] = value
    return obj
}
console.log(addProperty({name: 'John'},'age',25));
console.log(addProperty({},'city','New York'));