import Task from "../Models/task.js";

// Get all active (non-deleted) tasks
export const allTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ status: 200, tasks });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Add a new task
export const addTask = async (req, res) => {

  try {

    const { title, description, dueDate, priority, assignee, status } = req.body;

    console.log("Received body =>", req.body);

    // Create new task in the database

    const newTask = new Task({
      title,
      description,
      dueDate,
      priority,
      assignee,
      status,
    });

    newTask.save();

    res.status(201).json({
      status: 201,
      message: "Task created successfully",
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({
      status: 500,
      message: "Something went wrong while creating the task",
      error: error.message,
    });
  }
};

// Get only completed tasks
export const completedTask = async (req, res) => {
  try {
    const tasks = await Task.find({ completed: true, deleted: false });
    res.status(200).json({ status: 200, tasks });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Get only deleted tasks
export const deletedTask = async (req, res) => {
  try {
    const tasks = await Task.find({ deleted: true });
    res.status(200).json({ status: 200, tasks });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};
