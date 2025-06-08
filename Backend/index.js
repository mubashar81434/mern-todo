import express from "express";

import dotenv from "dotenv";

const app = express();

import { connectdb } from "./Configs/connectdb.js";

import userRoutes from "./Routes/user.js";

import taskRoutes from "./Routes/task.js";

dotenv.config();

connectdb(process.env.DB_URL)

let PORT = process.env.PORT || 3310;

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.use("/user", userRoutes);

app.use("/task", taskRoutes);



app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
