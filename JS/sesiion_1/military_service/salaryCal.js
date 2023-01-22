function salaryCal() {
    let extraHours;
    const salary = prompt("enter your hourly salary");
    const hours = prompt("enter how many hours you worked in one day");

    if(hours <= 7){
        console.log(salary*hours);
    }
  else if(hours >7){
    let extraHours = hours-7;
    console.log();
  }

}

salaryCal();