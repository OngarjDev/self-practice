const studentScoces = [
{ name: 'Alice' ,score: 85 },
{ name: 'Bob',score: 92 } ,
{ name: 'Charlie',score: 68 } ,
{ name: 'David',score: 55 } ,
{ name: 'Eve', score: 78 } ,
];


function getPassingNames(studentScoces){
    pass_student = []
    studentScoces.filter(value => value.score >= 70).forEach(element => {
        pass_student.push(element.name.toUpperCase())
    });
    return pass_student
}
const passingNames = getPassingNames(studentScoces);
console.log(passingNames);
// Output should be: ["ALICE", "BOB", "EVE"]