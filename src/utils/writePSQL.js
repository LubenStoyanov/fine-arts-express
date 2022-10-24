import * as dotenv from "dotenv";
dotenv.config();
import pg from "pg";
const { Client } = pg;
import data from "../data/data.json" assert { type: "json" };

const client = new Client({
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASSWORD,
  host: "localhost",
  database: "finearts",
});

(async () => {
  try {
    await client.connect();
    console.log("Successfuly connect to database...");
    const queryText = "INSERT INTO books VALUES ($1,$2,$3,$4,$5,$6)";

    (async () => {
      const books = data.books.forEach(async (book) => {
        console.log(">>>>>>>>>>", typeof book.sys.id === typeof "");
        try {
          await client.query(queryText, [
            book.sys.id,
            book.fields.title,
            book.fields.author,
            book.fields.release,
            book.fields.link,
            book.fields.cover.fields.file.url,
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
