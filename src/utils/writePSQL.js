import * as dotenv from "dotenv";
dotenv.config();
import pg from "pg";
const { Client } = pg;
import data from "../data/data.json" assert { type: "json" };

const client = new Client({
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASSWORD,
  host: process.env.VITE_DB_HOST,
  database: process.env.VITE_DB_NAME,
});

(async () => {
  try {
    await client.connect();
    console.log("Successfuly connect to database...");
    const queryText = `
    INSERT INTO books(id, title, author, release, link, cover)
    VALUES ($1,$2,$3,$4,$5,$6)`;

    (async () => {
      const books = data.books.forEach(async (book) => {
        try {
          await client.query(queryText, [
            book.sys.id,
            book.fields.title,
            book.fields.artist,
            book.fields.release,
            book.fields.cover.fields.file.url,
            book.fields.link,
          ]);
        } catch (error) {
          console.log("Failed to write table", error);
        }
      });
    })();
    console.log("Successfully write books table...");
  } catch (error) {
    console.error("Failed to connect to database...\n", error);
  } finally {
  }
})();
