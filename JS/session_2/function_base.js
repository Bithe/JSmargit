function myFunction(c,a,b){
    return a+b+c;
}

function myFunction2(){
    return 'hello';
}

myFunction(1,2,3);
myFunction();


const myFunction4 = () => {
    return 'hello'
};


const myFunction5 = a => {
    return a;
};


myFunction4();
myFunction5(a);


const awesomeFunction = (a, b) => a-b;

awesomeFunction(1,3);

