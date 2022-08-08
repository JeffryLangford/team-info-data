import Engineer from '../lib/Engineer.js';
import Manager from '../lib/Manager.js';
import Intern from '../lib/Intern.js';

function generateHTML(employees) {
  let cards = '';

 const generateCard = item => {
     cards +=`
    <card class="border border-dark p-2 bg-info text-white">
      <h2 class="mb-2">${item.name}</h2>
      <h4>Id: ${item.id}</h4>
      <h4>Email: ${item.email}</h4>
    `
    if(item instanceof Engineer) {
      cards += `<h4>Github: github.com/${item.github}</h4>`
    }
    if(item instanceof Manager) {
      cards += `<h4>Office Number: ${item.officeNumber}</h4>`
    }
    if(item instanceof Intern) {
      cards += `<h4>School: ${item.school}</h4>`
    }
    cards += `</card>`;
  }

  employees.forEach(element => 
  generateCard(element))

  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Info</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body class="wrapper bg-light">
    <header class="text-center p-4 m-4 bg-info">
      <h1>My Team</h1>
    </header>
    <main class="d-flex justify-content-around p-4 m-4">
      ${cards}
    </main>
    
  </body>
  </html>`
}

export default generateHTML;