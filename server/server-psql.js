import express from "express";
import { pool } from "./db-psql.js";
import cors from "cors"; // TODO Implement it

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/api/all", async (req, res) => {
  try {
    await pool.connect();
    console.log("Succesfully connected to database...");

    const { rows } = await pool.query("SELECT * FROM books");
    console.log(rows);

    res.send(rows);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  } finally {
    console.log("GET request was successful");
  }
});
app.get("/api/books", async (req, res) => {
  try {
    await pool.connect();
    console.log("Succesfully connected to database...");

    const { rows } = await pool.query("SELECT * FROM books");
    console.log(rows);

    res.send(rows);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  } finally {
    console.log("GET request was successful");
  }
});
app.get("/api/music", async (req, res) => {
  try {
    await pool.connect();
    console.log("Succesfully connected to database...");

    const { rows } = await pool.query("SELECT * FROM books");
    console.log(rows);

    res.send(rows);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  } finally {
    console.log("GET request was successful");
  }
});
app.get("/api/art", async (req, res) => {
  try {
    await pool.connect();
    console.log("Succesfully connected to database...");

    const { rows } = await pool.query("SELECT * FROM books");
    console.log(rows);

    res.send(rows);
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  } finally {
    console.log("GET request was successful");
  }
});

app.listen(port, console.log(`Server is running on http://localhost:${port}`));
