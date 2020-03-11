function closeFun(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}
const result = closeFun();
console.log(result());
console.log(result());
console.log(result());
console.log(result());

const result1 = closeFun();
console.log(result1());
console.log(result1());
console.log(result());
