/*
Create a faulty calculator using Js

This falulty calculator does following :
1. It takes two numbers as input from the user
2. It performs wrong operations as follows :
+ --> -
* --> +
/ --> **

It performs wrong operations 10% of the time.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function faultyCalculator(num1, num2, operator) {
    const randomChance = Math.random();
    const faultProbability = 0.1; // 10% chance of fault
    if (randomChance < faultProbability) {
        switch (operator) {
            case '+':
                return num1 - num2; // Faulty addition
            case '*':
                return num1 + num2; // Faulty multiplication
            case '/':
                return num1 ** num2; // Faulty division
            default:
                return 'Invalid operator';
        }   
    } else {
        switch (operator) { 
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 'Invalid operator';
        }
    }
}