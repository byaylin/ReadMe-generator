function generateMarkdown(htmlData){
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1> $(data.title) </h1>
      <h3> $(data.name) </h3>
      <h2>Description</h2>
          <p>$(data.description)</p>
      <h2>Installation</h2>
          <p>$(data.installation)</p>
      <h2>Usage</h2>
          <p>$(data.usage)</p>
      <h2>Tests</h2>
          <p> $(data.test) </p>
      <h2>License</h2>
          <p> $(data.license)</p>
      <h2> Questions</h2>
          <p>For addition questions please contact me through links below</p>
          <ul>
              <li>$(data.github)</li>
              <li>$(data.email)</li>
          </ul>
          
  </body>
  </html>`
}

modules.exports = generateMarkdown;