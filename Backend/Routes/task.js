import express from "express";
import {
  allTasks,
  addTask,
  completedTask,
  deletedTask,
} from "../Controllers/task.js";

const router = express.Router();
router.get("/all", allTasks);
router.post("/add", addTask);
router.get("/completed", completedTask);
router.get("/deleted", deletedTask);

export default router;
