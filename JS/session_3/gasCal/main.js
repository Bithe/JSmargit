// //ES6

// const calGasoline = () => {
//     const price = Number(document.getElementById('price').value);
//     const money = Number( document.getElementById("money").value);

//     // const money = +document.querySelector("#money").value; // the + indicate number method in new js

//     const answer = document.querySelector('#answer');

//     let text;

//     const amount = Math.floor(money/price);

//     if(amount>=10){
//         text = `you could get about ${amount} ltr, good now you can go`;
//     }

//     else{
//         text = `you could get about ${amount} ltr, sorry you have to stay :()`;
//     }


//     answer.textContent = text;

//     //document.querySelector('#answer').textContent = 'something';

//     console.log(price, money);
// };



// another way to do it with event listner

//ES6

const calcButton = document.querySelector('#gasCal') ;

const calGasoline = (e) => {

    e.preventDefault();
    const price = Number(document.querySelector('#price').value);
    const money = Number( document.querySelector("#money").value);

    const answer = document.querySelector('#answer');

    let text;

    const amount = Math.floor(money/price);

    if(amount>=10){
        text = `you could get about ${amount} ltr, good now you can go`;
    }

    else{
        text = `you could get about ${amount} ltr, sorry you have to stay :()`;
    }

    answer.textContent = text;
};

calcButton.addEventListener('click', calGasoline );