let age;
prompt("your age");
if(age<18){
console.log("too young");
}
else if(age<27 || age > 18){
    console.log("Right age for milotary service");
    }
    else if(age<41 && age > 27){
        console.log("your are in reserve");
        }
        else if(age<55 && age > 41){
            console.log("you are in backup seserve young");
            }
            else{
                console.log("too aged");
            }