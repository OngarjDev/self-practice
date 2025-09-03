console.log(Array.isArray([]))
console.log(Array.isArray("[]"))


const array14 = [1,30,4,21,100000]
console.log(array14)
array14.sort((number1,number2) => number1 - number2);
console.log(array14)


const stds = [
    { id: 105, name: "Boonchai", email: "tisanai@sit.kmutt.ac.th" },
    { id: 100, name: "ada", email: "tisanai@sit.kmutt.ac.th" },
    { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
    { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
    { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
console.log(stds.sort((a,b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" })));
//  console.log(stds.toSorted((a,b) => a.lo));