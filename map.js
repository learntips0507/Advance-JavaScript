// const number = [2, 4, 5, 7, 9];
// const numberMap = number.map(x => x * x);
// const numberMap = number.map(x => x * 10);
// console.log(numberMap);

// number.map(function(element, index,array){
//     console.log(element, index,array);
// });

// const number = [2, 4, 5, 7, 9];
// const output = [];
// for(let i = 0; i < number.length; i++){
//     const powerAdded = number[i];
//     const result = powerAdded * powerAdded;
//     output.push(result);
// }
// console.log(output);

const number = [2, 4, 5, 7, 9, 10, 15];
const bigNum = number.filter(x => x > 5);
console.log(bigNum);
