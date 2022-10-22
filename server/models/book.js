import { DataTypes } from "sequelize";
import { sequelize as db } from "../db.js";

export const Book = db.define("book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  cover: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
});
