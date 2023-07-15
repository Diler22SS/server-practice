const express = require("express");
const mongoose = require("mongoose");
const Result = require("./models/results");
const resultRoutes = require("./routes/api/result-routes");

const PORT = 3000;
const URL =
  "mongodb+srv://for664784:QayVKFzaawdbam8D@cluster0.gnelmha.mongodb.net/test_results?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(resultRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Not Connected to MongoDB"));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`hooray ${PORT}`);
});
