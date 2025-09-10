function mergeObject(obj1,obj2){
    obj = obj1.create(obj2);
    return obj
}
console.log(mergeObject({name:'John',age:25},{city: 'New York'}));
console.log(mergeObject({name:'Jane'}, {age:30,country:'USA'}))