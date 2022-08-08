import inquirer from 'inquirer';
import * as fs from 'fs';

import generateHTML from './src/generate-html.js';

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'Which role would you like to add?',
        choices: ['Employee', 'Intern', 'Engineer', 'Manager']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their ID?',
        validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number,
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'input',
        name: 'office-number',
        message: 'If a Manager, what is their Office Number? If not, hit enter',
        validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number,
    },
    {
        type: 'input',
        name: 'github',
        message: 'If an Engineer, what is their Github Username? If not, hit enter',
    },
    {
        type: 'input',
        name: 'school',
        message: 'If an Intern, what is their School? (If not, hit enter)',
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Would you like to add another team member?',
        default: 'true'
    }
];

const ask = () => {
    inquirer.prompt(questions).then((data) => {
        if (data.askAgain) {
            ask()
        } else {
        fs.writeFile('team-info.html', generateHTML(data), err => {
            if (err) throw err;
        })}
    });
}

ask();