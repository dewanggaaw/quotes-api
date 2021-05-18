import express from "express";
import cors from "cors";
import env from "dotenv";
import UserTable from "./src/Migrations/User";

env.config();

const app = express();

app.use(cors("*"));

app.get("/", (req, res) => {
  res.send({
    messages: "Hello",
  });
});

app.get("/migration", (req, res) => {
  require("./src/Migrations/User");
  const data = {
    message: "Table has been created",
    success: true,
    status: 200,
  };

  res.send(data);
});

app.listen(process.env.PORT, () => {
  console.log(`This apps runs at ${process.env.PORT}`);
});
