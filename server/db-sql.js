import { DataTypes, Sequelize } from "sequelize";

export const sequelize = new Sequelize("sqlite:fine-arts", {
  host: "localhost",
  dialect: "sqlite",
  storage: "server/db/database.sqlite",
});

try {
  await sequelize.authenticate();
  console.log(">>> Connection has been established successfully.");
} catch (error) {
  console.error(">>> Unable to connect to the database:", error);
}

export const Book = sequelize.define("books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artist: {
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
