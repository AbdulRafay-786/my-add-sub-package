#!/usr/bin/env node

const inquirer = require('inquirer');

async function performCalculation() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstNumber',
            message: 'Enter the first number:',
            validate: input => !isNaN(input) || 'Please enter a valid number.'
        },
        {
            type: 'input',
            name: 'secondNumber',
            message: 'Enter the second number:',
            validate: input => !isNaN(input) || 'Please enter a valid number.'
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Choose the operation:',
            choices: ['Add', 'Subtract']
        }
    ]);

    const { firstNumber, secondNumber, operation } = answers;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    let result;
    if (operation === 'Add') {
        result = num1 + num2;
    } else if (operation === 'Subtract') {
        result = num1 - num2;
    }

    console.log(`The result is: ${result}`);
}

performCalculation();
