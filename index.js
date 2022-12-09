const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
// enable Body Parser

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set Static folder below
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => {
  return console.log(`server Started in port ${port}`);
});
