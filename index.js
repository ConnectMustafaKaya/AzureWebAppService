const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const { json } = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/api/hello", async (req, res) => {
  const somekey = process.env.APPSETTING_somekey;

  // const list = JSON.stringify(process.env)

  res.send("somekey: " + somekey);
});

app.get("/api/merhaba", (req, res) => {
  res.send("Merhaba");
});

app.post("/api/name", (req, res) => {
  const body = _.pick(req.body, ["firstName", "lastName"]);
  console.log(body);
  res.send("Hello " + body.firstName + " " + body.lastName);
});

app.listen(8080, () => {
  console.log("app server is running");
});
