const generateHTML = data => {
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
  <main class="flex-box p-4 m-4">
    <card class="border border-dark w-25">
      <h2>${data.name}</h2>
      <h4>Id: 12345678</h4>
      <h4>Email: asdfghjk</h4>
      <h4>Office Number: 12345678</h4>
    </card>
    <card class="border border-dark w-25">
      <h2>Employee's Name</h2>
      <h4>Id: 12345678</h4>
      <h4>Email: asdfghjk</h4>
    </card>
    <card class="border border-dark w-25">
      <h2>Engineer's Name</h2>
      <h4>Id: 12345678</h4>
      <h4>Email: asdfghjk</h4>
      <h4>Github: link</h4>
    </card>
    <card class="border border-dark w-25">
      <h2>Intern's Name</h2>
      <h4>Id: 12345678</h4>
      <h4>Email: asdfghjk</h4>
      <h4>School: School</h4>
    </card>
  </main>
  
</body>
</html>`
}

export default generateHTML;