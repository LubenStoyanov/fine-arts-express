import helmet from "helmet";
import express from "express";
import cors from "cors";
import db from "./db-psql.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());

app.get("/api/all", async (req, res) => {
  try {
    await db.raw("select 1");
    console.log("Succesfully connected to database...");

    const books = await db("books");
    const songs = await db("songs");
    const art = await db("art");
    const data = { music: songs, art: art, books: books };

    res.json(data);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  }
});

app.get("/api/books", async (req, res) => {
  try {
    await db.raw("select 1");
    console.log("Succesfully connected to database...");

    const books = await db("books");
    res.json(books);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  }
});

app.get("/api/music", async (req, res) => {
  try {
    await db.raw("select 1");
    console.log("Succesfully connected to database...");

    const songs = await db("songs");

    res.json(songs);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  }
});

app.get("/api/art", async (req, res) => {
  try {
    await db.raw("select 1");
    console.log("Succesfully connected to database...");

    const art = await db("art");

    res.json(art);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  }
});

app.listen(port, console.log(`Server is running on http://localhost:${port}`));
