// Backend/Models/task.js

import mongoose from "mongoose";

// Subtask schema
const subtaskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

// Main task schema
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    dueDate: {
      type: Date,
    },
    priority: {
      type: String,
      enum: ["low", "normal", "high"],
      default: "normal",
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
    tags: [String],
    subtasks: [subtaskSchema],
    fileUrl: {
      type: String, // Will store the file URL or path
    },
    completed: {
      type: Boolean,
      default: false,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// ✅ Safe model registration to avoid duplication in dev (especially with nodemon)
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
