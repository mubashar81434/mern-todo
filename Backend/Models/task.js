// Backend/Models/task.js

import mongoose from "mongoose";

// Task schema

const taskSchema = new mongoose.Schema(

  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: String,
      enum: ["low", "normal", "high"],
      default: "normal",
    },
    description: {
      type: String,
      trim: true,
    },
    dueDate: {
      type: Date,
    },
    assignee: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["todo", "inprogress", "done"],
      default: "todo",
    },
  },
  { timestamps: true }
);

// ✅ Safe model registration to avoid duplication in dev (especially with nodemon)

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
