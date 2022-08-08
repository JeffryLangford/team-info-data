import inquirer from 'inquirer';
import * as fs from 'fs';

import generateHTML from './src/generate-html.js';
import Engineer from './lib/Engineer.js';
import Manager from './lib/Manager.js';
import Intern from './lib/Intern.js';
import Employee from './lib/Employee.js';

const employees = [];

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
        when: (choice) => choice.role === 'Manager',
        type: 'input',
        name: 'officeNumber',
        message: 'If a Manager, what is their Office Number? If not, hit enter',
        validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number,
    },
    {
        when: (choice) => choice.role === 'Engineer',
        type: 'input',
        name: 'github',
        message: 'If an Engineer, what is their Github Username? If not, hit enter',
    },
    {
        when: (choice) => choice.role === 'Intern',
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
        if(data.role == 'Intern') {
            employees.push(new Intern(data))
        } else if (data.role == 'Manager') {
            employees.push(new Manager(data))
        } else if (data.role == 'Engineer') {
            employees.push(new Engineer(data))
        } else if (data.role == 'Employee') {
            employees.push(new Employee(data.name, data.id, data.email))
        }
        if (data.askAgain) {
            ask()
        } else {
        fs.writeFile('team-info.html', generateHTML(employees), err => {
            if (err) throw err;
        })}
    });
}

ask();