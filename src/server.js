import express from "express";
import data from "../src/data/data.json" assert { type: "json" };

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/all", (req, res, next) => {
  try {
    res.send(data);
  } catch (err) {
    console.log("Unlucky error: ");
    next(err);
  }
});

app.get("/api/books", (req, res, next) => {
  try {
    console.log("server", data.books.length);
    res.send(data.books);
  } catch (err) {
    console.log("Unlucky error: ");
    next(err);
  }
});

app.get("/api/music", (req, res, next) => {
  try {
    console.log("server", data.books.length);
    res.send(data.music);
  } catch (err) {
    console.log("Unlucky error: ");
    next(err);
  }
});

app.get("/api/art", (req, res, next) => {
  try {
    console.log("server", data.books.length);
    res.send(data.art);
  } catch (err) {
    console.log("Unlucky error: ");
    next(err);
  }
});

app.listen(port, console.log(`Server running on http://localhost:${port}`));
