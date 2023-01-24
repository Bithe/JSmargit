let numbers, avg;

while(numbers!=0){
    numbers = Number(prompt('enter numbers'));

    if(numbers == 0){
        console.log('you cant give 0');
        break;
    }

    avg=numbers/2;
    console.log('average is:', avg);
}