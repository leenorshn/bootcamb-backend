const http = require("http");
const fs = require("fs").promises;

var hostname = "127.0.0.1";
var port = 8000;

// const requestListener = (req, res) => {
//   //res.setHeader({ "Content-type": "text" });
//   res.writeHead(200);
//   res.end("Bonjour le monde");
// };

// json javascript struct object notation

const person = JSON.stringify({
  name: "Bene",
  phone: "09898989999",
  age: 30,
});

const produit = JSON.stringify({
  name: "Avocat",

  price: 30,
});

// const people = [person, person, person];
// const products = [produit, produit];

// const requestListener = function (req, res) {
//   res.setHeader("Content-type", "application/json");

//   switch (req.url) {
//     case "/users":
//       res.writeHead(200);
//       res.end(`${people}`);
//       break;
//     case "/products":
//       res.writeHead(200);
//       res.end(`${products}`);
//       break;

//     default:
//       res.writeHead(404);
//       res.end("Root not found");
//       break;
//   }
// };

// const htmlVal = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Mon site Innov</h1>
// </body>
// </html>`;
function requestListener(req, res) {
  fs.readFile(__dirname + "/index.html")
    .then((content) => {
      res.setHeader("Content-type", "text/html");
      res.writeHead(200);
      res.end(content);
    })
    .catch((err) => {
      res.writeHead(404);
      res.end("not find");
    });
}

const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
  console.log(`server is running on ${hostname}:${port}`);
});
