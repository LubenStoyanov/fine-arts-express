import * as dotenv from "dotenv";
dotenv.config();
import knex from "knex";
import data from "../data/data.json" assert { type: "json" };

const db = knex({
  client: "pg",
  connection: {
    host: process.env.VITE_DB_HOST,
    port: process.env.VITE_DB_PORT,
    user: process.env.VITE_DB_USER,
    password: process.env.VITE_DB_PASSWORD,
    database: process.env.VITE_DB_NAME,
  },
  searchPath: ["knex", "public"],
});

(async () => {
  try {
    await db.raw("SELECT 1");
    console.log("Successfully connected to database...");
  } catch (err) {
    console.error("Failed to connect to database...\n", err);
  }
})();

// (async () => {
//   try {
//     data.music.map(async (song) => {
//       await db("songs").insert({
//         id: song.sys.id,
//         title: song.fields.title,
//         artist: song.fields.artist,
//         release: song.fields.release,
//         link: song.fields.link,
//         cover: song.fields.cover.fields.file.url,
//       });
//     });
//     console.log(`Successfully inserted into table...`);
//   } catch (err) {
//     console.log("Failed to populate table", err);
//   }
// })();

(async () => {
  try {
    data.art.map(async (art) => {
      await db("art").insert({
        id: art.sys.id,
        title: art.fields.title,
        artist: art.fields.artist,
        alive: art.fields.alive,
        description: art.fields.description,
        century: art.fields.century1,
        link: art.fields.link,
        artworks: art.fields.artworks[0].fields.file.url,
      });
    });
    console.log(`Successfully inserted into table...`);
  } catch (err) {
    console.log("Failed to populate table", err);
  }
})();
