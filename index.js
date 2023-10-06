const express = require("express");
const data = require("./data");

const app = express();

app.get("/apnakissanapi/market", (req, res) => {
  res.send(data);
});

app.get("/apnakissanapi/market/products", (req, res) => {
  res.send(data);
});

app.get("/apnakissanapi/market/:id", (req, res) => {
  const { id } = req.params;
  const product = data.find((e) => e.id == id);
  res.send(product);
});

app.listen("8000", () => {
  console.log("LISTENING AT PORT 8000");
});
