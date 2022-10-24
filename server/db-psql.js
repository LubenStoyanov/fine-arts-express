import * as dotenv from "dotenv";
dotenv.config();
import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "finearts",
});
