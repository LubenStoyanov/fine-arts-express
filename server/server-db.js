import express from "express";
import { sequelize as db } from "./db.js";
import data from "../src/data/data.json" assert { type: "json" };
import { createBooksTable } from "./controllers/book-controller.js";
import { Book } from "./models/book.js";

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(async (req, res, next) => {
  createBooksTable();
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

app.get("/api/books", async (req, res, next) => {
  try {
    await db.sync({ force: true });
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/music", (req, res, next) => {
  try {
    res.send(data.music);
  } catch (err) {
    console.log("Unlucky error: ");
    next(err);
  }
});

app.get("/api/art", (req, res, next) => {
  try {
    res.send(data.art);
  } catch (err) {
    console.log("Unlucky error: ");
    next(err);
  }
});

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
  try {
    await db.sync({ force: true });
    console.log("Database synced!");
  } catch (error) {
    console.error("Unable to create table : ", error);
  }
});
