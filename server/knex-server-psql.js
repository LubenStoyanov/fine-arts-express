import express from "express";
import cors from "cors";
import db from "./db-psql.js";
import connectDB from "./utils/connect-db.js";
import dataAll from "./utils/dataAll.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// GET

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

app.get("/api/song/:id", async (req, res) => {
  try {
    connectDB();
    const [song] = await db("songs").where({
      id: req.params.id,
    });

    res.json(song);
    console.log("Succesfully send book...");
  } catch (error) {
    console.log("Failed to get book...", error);
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

app.get("/api/art/:id", async (req, res) => {
  try {
    connectDB();
    const [art] = await db("art").where({
      id: req.params.id,
    });

    res.json(art);
    console.log("Succesfully send book...");
  } catch (error) {
    console.log("Failed to get book...", error);
  }
});

// CREATE

app.post("/api/create", async (req, res) => {
  const { category, title, creator, release, description } = req.body;

  try {
    connectDB();
    await db(`${category}`).insert({
      id: title + creator,
      title: title,
      artist: creator,
      release: release,
      description: description,
    });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
  }
});

// UPDATE

app.put("/api/update", async (req, res) => {
  const { category, title, creator, release, description } = req.body;

  try {
    connectDB();
    await db(`${category}`)
      .where({ artist: creator })
      .orWhere({ title: title })
      .update({
        title: title,
        artist: creator,
        release: release,
        description: description,
      });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

// DELETE

app.delete("/api/delete/:title/:category", async (req, res) => {
  const { title, category } = req.params;
  console.log(title, category);

  try {
    await db(`${category}`).where({ title: title }).del();
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, console.log(`Server is running on http://localhost:${port}`));
