import express from "express";
import fs from "fs";
import contentful from "./fetchData.js";

const app = express();
const port = process.env.PORT || 5000;

const { getArt, getBooks, getMusic } = contentful();

const music = await getMusic();
const art = await getArt();
const books = await getBooks();

const data = JSON.stringify({ music: music, art: art, books: books }, null, 2);

const writeData = () => {
  fs.writeFile("data.json", data, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

writeData();

app.listen(port, console.log("server running"));
