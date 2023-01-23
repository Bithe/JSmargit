const randomNum = () => {

    let firstNum = Number(prompt("please enter first number"));
    let secondNum = Number(prompt("please enter second number"));
    let thirdNum = Number(prompt("please enter third number"));
    let sum, multiplication;

    if ((firstNum || secondNum || thirdNum) > 0) {
        sum = firstNum + secondNum + thirdNum;
        console.log(`${firstNum}, ${secondNum}, ${thirdNum}, 'Total is:'`, sum);

        if ((firstNum && secondNum && thirdNum) >= 0) {
            multiplication = firstNum * secondNum * thirdNum;
            console.log('Total is:', sum, 'Multiplication is:', multiplication);
        }
    }

    else if ((firstNum && secondNum && thirdNum) <= 0) {
        console.log("only negatives");
    }
}
randomNum();