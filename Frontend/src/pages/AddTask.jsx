import React, { useState } from "react";
import { DarkModeToggle } from "../components/xyz.js";
import {
  CalendarDays,
  Flag,
  Save,
  User,
  Tags,
  File,
  Plus,
  X,
} from "lucide-react";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "normal",
    assignee: "",
    status: "todo",
    tags: [],
    tagInput: "",
    subtasks: [""],
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setTask((prev) => ({ ...prev, file: files[0] }));
    } else {
      setTask((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubtaskChange = (index, value) => {
    const updated = [...task.subtasks];
    updated[index] = value;
    setTask((prev) => ({ ...prev, subtasks: updated }));
  };

  const addSubtask = () => {
    setTask((prev) => ({ ...prev, subtasks: [...prev.subtasks, ""] }));
  };

  const removeSubtask = (index) => {
    const updated = [...task.subtasks];
    updated.splice(index, 1);
    setTask((prev) => ({ ...prev, subtasks: updated }));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && task.tagInput.trim() !== "") {
      e.preventDefault();
      if (!task.tags.includes(task.tagInput.trim())) {
        setTask((prev) => ({
          ...prev,
          tags: [...prev.tags, task.tagInput.trim()],
          tagInput: "",
        }));
      }
    }
  };

  const removeTag = (index) => {
    const updated = [...task.tags];
    updated.splice(index, 1);
    setTask((prev) => ({ ...prev, tags: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Submitted:", task);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-200">
      {/* Header */}
      <header className="w-full px-4 py-4 border-b border-gray-300 dark:border-gray-800 flex justify-between items-center bg-gray-100 dark:bg-gray-900 shadow fixed top-0 z-50">
        <h1 className="text-xl font-bold">📝 Add Task</h1>
        <div className="flex items-center gap-4">
          <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            👤 John Doe
          </span>
          <DarkModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-[68px] ">
        <div className="bg-gray-100 dark:bg-gray-900 p-6 shadow-xl border border-gray-200 dark:border-gray-800 ">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title & Priority */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Task Title</label>
                <input
                  type="text"
                  name="title"
                  value={task.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter task title"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="w-full md:w-48">
                <label className="text-sm font-medium mb-1 flex items-center gap-1">
                  <Flag size={16} /> Priority
                </label>
                <select
                  name="priority"
                  value={task.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            {/* Description & Sidebar */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="w-full lg:w-3/4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={task.description}
                  onChange={handleChange}
                  rows={11}
                  placeholder="Write task details..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <div className="w-full lg:w-1/4 space-y-4 mt-1">
                <div>
                  <label className="text-sm font-medium flex items-center gap-1">
                    <CalendarDays size={16} /> Due Date
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={task.dueDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center gap-1">
                    <User size={16} /> Assignee
                  </label>
                  <input
                    type="text"
                    name="assignee"
                    value={task.assignee}
                    onChange={handleChange}
                    placeholder="e.g., John Doe"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1">Status</label>
                  <select
                    name="status"
                    value={task.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="todo">To Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center gap-1">
                    <Tags size={16} /> Tags
                  </label>
                  <input
                    type="text"
                    value={task.tagInput}
                    onChange={(e) =>
                      setTask((prev) => ({ ...prev, tagInput: e.target.value }))
                    }
                    onKeyDown={handleTagKeyDown}
                    placeholder="Type and press Enter"
                    className="w-full px-4 py-2 mb-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="flex flex-wrap gap-2">
                    {task.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(index)}
                          className="hover:text-red-200"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Subtasks */}
            <div>
              <label className="text-sm font-medium mb-1 flex items-center gap-1">
                <Plus size={16} /> Subtasks
              </label>
              <div className="space-y-2">
                {task.subtasks.map((subtask, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={subtask}
                      onChange={(e) =>
                        handleSubtaskChange(index, e.target.value)
                      }
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder={`Subtask ${index + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeSubtask(index)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSubtask}
                  className="mt-2 text-indigo-600 hover:underline flex items-center gap-1"
                >
                  <Plus size={16} /> Add Subtask
                </button>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="text-sm font-medium mb-1 flex items-center gap-1">
                <File size={16} /> Attachment
              </label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="w-full text-sm text-gray-500 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex justify-center items-center gap-2 transition"
            >
              <Save size={18} /> Add Task
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddTask;
