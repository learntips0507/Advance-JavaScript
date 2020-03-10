const student = [
    {id: 5, name:"Samrat"},
    {id: 7, name:"Ahmad"},
    {id: 9, name:"Md.Karim"},
    {id: 12, name:"Jahaid"}
]

//with loop
const output = [];
for(let i = 0; i < student.length; i++){
    const executeNum = student[i];
    output.push(executeNum.name);
}
console.log(output);
//with map

const findName = student.map(x => x.name);
const findId = student.map(x => x.id);
const findIdFilter = student.filter(x => x.id > 7);
console.log(findIdFilter);

