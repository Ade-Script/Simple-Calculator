alert('A simple claculator')
const operator = prompt('Please enter an operator ( either +, -, * or / ): ');


const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;


if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/') {
    result = number1 / number2;
}
else{
	alert('operator invalid please try again');
}


alert(`${number1} ${operator} ${number2} = ${result}`);