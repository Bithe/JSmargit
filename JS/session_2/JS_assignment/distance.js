//ex 3


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