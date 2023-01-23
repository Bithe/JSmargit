let student, name;
name = 'Bithe';
student=name;

alert(student);

let age = prompt('please enter your age');

if(age<18){
    console.log('too young');
}
else if(age<27){
    console.log('Right age for military servic');
}

else if(age<41){
    console.log('You are in reserve');
}

else if(age<55){
    console.log('You are in backup reserve');
}
else{
    console.log("nothing");
}


