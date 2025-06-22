import React, { useState } from "react";
import { DarkModeToggle } from "../components/xyz.js";
import {
  CalendarDays,
  Flag,
  Save,
  User,
  File,
} from "lucide-react";

const AddTask = () => {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("todo");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const todo = {
        title,
        priority,
        description,
        dueDate,
        assignee,
        status,
      };

      console.log('Submited task', todo);

      const response = await fetch('http://localhost:3310/api/task/add',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(todo)
      })
      const responseInJson = await response.json()
      console.log('Rsponse in json formate =>',responseInJson);


    } catch (error) {

      console.error("❌ Error submitting task:", error);

    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-200">

      <header className="w-full px-4 py-4 border-b border-gray-300 dark:border-gray-800 flex justify-between items-center bg-gray-100 dark:bg-gray-900 shadow fixed top-0 z-50">
        <h1 className="text-xl font-bold">📝 Add Task</h1>
        <div className="flex items-center gap-4">
          <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            👤 John Doe
          </span>
          <DarkModeToggle />
        </div>
      </header>

      <main className="mt-[68px]">

        <div className="bg-gray-100 dark:bg-gray-900 p-6 shadow-xl border border-gray-200 dark:border-gray-800">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title & Priority */}

            <div className="flex flex-col md:flex-row gap-5">

              <div className="flex-1">

                <label className="block text-sm font-medium mb-1">Task Title</label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>

              </div>

            </div>

            {/* Description */}

            <div className="flex flex-col lg:flex-row gap-5">

              <div className="w-full lg:w-3/4">

                <label className="block text-sm font-medium mb-1">Description</label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                </div>

                <div>

                  <label className="text-sm font-medium flex items-center gap-1">
                    <User size={16} /> Assignee
                  </label>

                  <input
                    type="text"
                    value={assignee}
                    onChange={(e) => setAssignee(e.target.value)}
                    placeholder="e.g., John Doe"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                </div>

                <div>

                  <label className="text-sm font-medium mb-1">Status</label>

                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="todo">To Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                  </select>

                </div>

                
              </div>
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
