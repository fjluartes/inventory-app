const express = require("express");
const mongoose = require("mongoose");

const app = express();
const logger = require("morgan");
require("dotenv").config();

const port = process.env.SERVER_PORT;
const connString = process.env.DB_STRING;
const cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(connString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Connected to cloud database: MongoDB Atlas");
});

const userRoutes = require("./routes/user");
const itemRoutes = require("./routes/item");
const categoryRoutes = require("./routes/category");

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.listen(port || 4000, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log(`Server running at port ${port}`);
  }
});
