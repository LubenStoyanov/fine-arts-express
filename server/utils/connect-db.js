import db from "../db-psql.js";

export default async function connect() {
  await db.raw("select 1");
  console.log("Succesfully connected to database...");
}
