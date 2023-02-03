const express = require("express");
var cors = require('cors')
const app = express();
const port = process.env.DBPORT || 3000;
console.log(port);
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
// import {SumaController} from "../myapp/controllers/suma.controller"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const client = new MongoClient(
  "mongodb://jamp1987:jamp1987+@DESKTOP-0MTDOVI:3002"
);

app.post("/suma", async (req, res) => {
  try {
    // const suma = req.body.num1 + req.body.num2;
    const num1 = req.body.num1
    const num2 = req.body.num2
    const sum = num1 + num2

    await client.db("suma").collection("ejemplo_suma").insertOne({
      numero1: req.body.num1,
      numero2: req.body.num2,
      resultado: sum,
    });
    res.json({sum});
  } catch (error) {
    console.dir(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
