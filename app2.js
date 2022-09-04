//express
const express = require("express");

const app = express();

var hostname = "127.0.0.1";
var port = 8000;

const person = {
  name: "Bene",
  phone: "09898989999",
  age: 30,
};

app.get("/", (req, res) => {
  // ici acceder a la db
  res.status(200).send([person, person]);
});

app.get("/:id", (req, res) => {
  // ici acceder a la db
  res.status(200).send(person);
});

app.post("/", (req, res) => {
  // ici acceder a la db
  res.status(201).send(req.body);
});

app.put("/:id", (req, res) => {
  // ici acceder a la db
  res.status(201).send(req.body);
});

app.delete("/:id", (req, res) => {
  // ici acceder a la db
  res.status(204).send();
});

app.listen(port, hostname, function () {
  console.log(`server is running on ${hostname}:${port}`);
});
