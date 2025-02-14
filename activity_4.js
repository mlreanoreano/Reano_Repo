//Step 1
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers.");
} else {
    switch (operator) {
        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case '/':
            if (num2 === 0) {
                console.log("Cannot divide by zero");
            } else {
                console.log(`${num1} / ${num2} = ${num1 / num2}`);
            }
            break;
        default:
            console.log("Invalid operator");
    }
}
