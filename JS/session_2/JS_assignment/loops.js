//ex 1
console.log("Ex 1:")

for ( i = 1; i < 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
console.log("/////////////////////////////");
console.log("Ex 1:")
for ( i = 1; i < 100; i+=2) { 
      console.log(i);
  }

  console.log("/////////////////////////////");


  //ex 2
console.log("Ex 2:");
let num=" ";
for(i=1; i<100; i++){
    if(i%2 == 0){ 
        num= num + " "+i;
        console.log(num);
    }
}

console.log("/////////////////////////////");
console.log("Ex 2:");

let answer= '';
let end =98;
for(let i=2; i<100; i+=2){
    answer += ' ' + i + ' ';
    answer +=  ' ' + end + ' ';
    end-=2;
}

console.log(answer,end);


//ex 3
console.log("Ex 3:");


 
//do{
    //distance = Number(prompt("Please enter Distance"));
    //time = Number(prompt("Please enter Time"));
    //avg= distance/time;

//}while( (distance || time) !=0);

let distance, time, avg;
 while(distance!=0){
    distance = Number(prompt('Please enter Distance in Km'));
    if(distance == 0){
        console.log('distance is 0 - game over');
        break;
    }

    time = Number(prompt('Please enter Time'));
    avg = distance/time;
    console.log('avarage is: ', avg);
 }


//console.log();


//ex 4
