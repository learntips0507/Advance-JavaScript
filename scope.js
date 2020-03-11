//Local scope
function number(one ,two){
    const sum = one + two;
    return sum;
}
const result = number(5, 6);
//console.log(sum); not granted 
console.log(result);

//Global scope
const three = 4;
function number(one ,two){
    const sum = one + two + three;
    return sum;
}
const result = number(5, 6);
//console.log(sum); not granted 
console.log(result);

//var use
function number(){
    var sub = 10 - 3;
    return sub;
}
console.log(sub);

function anyFunctionName(a,b){
    const anyNme = a + b;
    console.log(anyNme);
    return anyNme;
}
const result = anyFunctionName(5, 6);
console.log(result);