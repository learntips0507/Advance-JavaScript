// const number = [2, 5, 8, 9, 24, 15, 34, 4, 55];
// for(let i = 0; i < number.length; i++){
    
//     if(number[i] > 10){
//         break;
//     }
//     console.log(number[i]);
// }


const number = [2, -5, 8, 9, -24, 15, -34, 4, 55];
for(let i = 0; i < number.length; i++){
    
    if(number[i] > 0){
        continue;
    }
    console.log(number[i]);
}
