let salary, cal;
let hourlySal = prompt('your hourly salary?');
let hours = prompt('how many hours you worked?');

if(hours<=7){
    cal = hours*hourlySal;
    console.log(cal);
}


else if(hours>7){
    extraHour = hours-7;
    calExtra= (extraHour*hourlySal)/2;
    cal= (hours-extraHour)*hourlySal+calExtra;
    console.log(cal);
}
