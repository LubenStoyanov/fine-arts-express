import db from "../db-psql.js";

export default async function dataAll() {
  const books = await db("books");
  const songs = await db("songs");
  const art = await db("art");
  return { music: songs, art: art, books: books };
}
