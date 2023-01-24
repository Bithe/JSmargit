// let sum=0, count=0, avg;

// for(let counter=0; counter<4; counter++){
//     let input=Number(prompt('enter a number'));

//     if(input == 0){
//         console.log('you cant give 0');
//         break;
//     }
//     sum+=input;
//     count++;
// }

// avg=sum/count;
// console.log(avg);

//mam

let sum=0, count=0, input;
while(input!=0){
    input=Number(prompt('enter a number'));
    if(input == 0){
              console.log('you cant give 0');
                 break;
         }
    sum+=input;
    count++;
}
let avg = sum/count;
console.log(avg);





