import express from "express";
import cors from "cors";
import db from "./db-psql.js";
import connectDB from "./utils/connect-db.js";
import dataAll from "./utils/dataAll.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/api/all", async (req, res) => {
  try {
    connectDB();
    const data = await dataAll();

    res.json(data);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  }
});

app.get("/api/books", async (req, res) => {
  try {
    connectDB();
    const books = await db("books");
    res.json(books);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  }
});

app.get("/api/book/:id", async (req, res) => {
  try {
    connectDB();
    const [book] = await db("books").where({
      id: req.params.id,
    });

    res.json(book);
    console.log("Succesfully send book...");
  } catch (error) {
    console.log("Failed to get book...", error);
  }
});

app.get("/api/music", async (req, res) => {
  try {
    connectDB();
    const songs = await db("songs");

    res.json(songs);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  }
});

app.get("/api/art", async (req, res) => {
  try {
    connectDB();
    const art = await db("art");

    res.json(art);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  }
});

app.listen(port, console.log(`Server is running on http://localhost:${port}`));
