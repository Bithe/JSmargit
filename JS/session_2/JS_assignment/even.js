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
for(let count=0; count<5;count++){
  let input = Number(prompt('enter a number'));

  if (input % 2 == 0) {
           even++;
        }
}
console.log('there was', even, 'even numbers');


// let even = 0;

// for (let counter = 0; counter < 5; counter++) {
//   let input = Number(prompt('Enter a number'));

//   if (input % 2 == 0) {
//     even++;
//   }
// }
// console.log('There was', even, 'even numbers');