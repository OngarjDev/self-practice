function mergeAndDestructure(obj1, obj2) {
    const merged = { ...obj1, ...obj2 };   // merge objects
    const { name, age } = merged;          // destructure เฉพาะ name, age
    return { name, age };
}
console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))