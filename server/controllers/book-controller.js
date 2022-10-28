import { Book } from "../models/book.js";
import data from "../../src/data/data.json" assert { type: "json" };

export const createBooksTable = () => {
  data.books.forEach(async (book) => {
    try {
      await Book.create({
        title: book.fields.title,
        author: book.fields.author,
        release: book.fields.release,
        link: book.fields.link,
        cover: book.fields.cover.fields.file.url,
      });
    } catch (error) {
      console.log(error);
    }
  });
};
