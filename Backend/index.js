import express from "express";

import dotenv from "dotenv";

const app = express();

import { connectdb } from "./Configs/connectdb.js";

import userRoutes from "./Routes/user.js";

import taskRoutes from "./Routes/task.js";
import { uploadRouter } from "./Routes/uploadthing.js"; // 👈 Import your router


dotenv.config();

app.use(express.json()); // Required to parse JSON request bodies

connectdb(process.env.DB_URL)

let PORT = process.env.PORT || 3310;

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.use("/user", userRoutes);

app.use("/api/task", taskRoutes);
// ✅ Mount UploadThing endpoint
app.use(uploadthingRoutes);




app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
