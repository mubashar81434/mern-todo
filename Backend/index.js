import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Make sure to load env variables early

import { connectdb } from "./Configs/connectdb.js";
import userRoutes from "./Routes/user.js";
import taskRoutes from "./Routes/task.js";
// import { uploadRouter } from "./Routes/__uploadthing.js"; // 👈 Import matches usage below

const app = express();

// Middleware
app.use(cors()); // You can add options here if needed
app.use(express.json()); // For parsing application/json

// Connect to DB
connectdb(process.env.DB_URL);

// Routes
app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.use("/user", userRoutes);
app.use("/api/task", taskRoutes);
// app.use("/api/upload", uploadRouter); // 👈 Corrected usage

// Start server
const PORT = process.env.PORT || 3310;
app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
