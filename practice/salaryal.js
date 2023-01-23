let salary, calExtra, extraHour;
let hourlySal = prompt('your hourly salary?');
let hours = prompt('how many hours you worked?');

if(hours<=7){
    salary = hours*hourlySal;
    console.log(salary);
}

else if(hours<=9){
    salary = (7*hourlySal)+((hours-7)*hourlySal)*1.5;
    console.log(salary);
}


else if(hours>7){
    extraHour = hours-7;
    calExtra= (extraHour*hourlySal)*1.5;
    salary= (hours-extraHour)*hourlySal+calExtra;
    console.log(salary);
}



