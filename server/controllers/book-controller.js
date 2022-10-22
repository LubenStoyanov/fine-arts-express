import { Book } from "../models/book.js";
import data from "../../src/data/data.json" assert { type: "json" };

export const createBooksTable = async () => {
  data.books.map(async (book) => {
    try {
      const newBook = await Book.create({
        title: book.fields.title,
        author: book.fields.author,
        release: book.fields.release,
        link: book.fields.link,
        cover: book.fields.cover.fields.file.url,
      });
      return newBook;
    } catch (error) {
      console.log(error);
    }
  });
};
