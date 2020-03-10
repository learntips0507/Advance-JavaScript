function argue(a,b){
    console.log([...arguments]);
    return a + b + arguments[2];
}
const result = argue(2, 5, 6 , 5, 7, 11);
console.log(sum);


