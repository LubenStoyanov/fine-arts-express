import express from "express";
import fs from "fs";
import contentful from "./data/fetchData.js";

const app = express();

const port = process.env.PORT || 5000;

const { getArt, getBooks, getMusic } = contentful();

const music = await getMusic();
const art = await getArt();
const books = await getBooks();

const writeData = () => {
  fs.writeFile("musicData.txt", JSON.stringify(music), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
  fs.writeFile("booksData.txt", JSON.stringify(books), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
  fs.writeFile("artData.txt", JSON.stringify(art), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
};

writeData();

app.listen(port, console.log("server running"));
