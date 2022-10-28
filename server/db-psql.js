import * as dotenv from "dotenv";
dotenv.config();
import knex from "knex";

export default knex({
  client: "pg",
  connection: {
    host: process.env.VITE_DB_HOST,
    port: process.env.VITE_DB_PORT,
    user: process.env.VITE_DB_USER,
    password: process.env.VITE_DB_PASSWORD,
    database: process.env.VITE_DB_NAME,
  },
  pool: { min: 0, max: 10 },
  searchPath: ["knex", "public"],
});

// import pg from "pg";
// const { Pool } = pg;

// export const pool = new Pool({
//   user: process.env.VITE_DB_USER,
//   password: process.env.VITE_DB_PASSWORD,
//   host: VITE_DB_HOST,
//   port: VITE_DB_PORT,
//   database: process.env.VITE_DB_NAME,
// });
