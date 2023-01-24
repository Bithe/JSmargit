// let numbers,even;
// do{
//     numbers = Number(prompt('Give 20 numbers'));
//     even = (numbers%2 == 0);
    
// }while(numbers!=5);
// console.log(even);

//ex 4

// while(i = Number(prompt('Give 5 numbers')) <3 ) {
    
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }


let even=0;
for(let count=0; count<100;count++){
  let input = Number(prompt('enter a number'));

  if (i % 2 != 0) {
           even++;
        }
}
console.log('there was', even, 'even numbers');