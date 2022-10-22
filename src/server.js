import express from "express";
import data from "./data/data.json" assert { type: "json" };

const app = express();
const port = 5000;

app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res, next) => {
  try {
    res.send(data);
  } catch (err) {
    console.log("Unlucky error: ");
    next(err);
  }
});

app.listen(port, console.log(`Server running on http://localhost:${port}`));
