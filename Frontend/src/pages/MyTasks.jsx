import React, { useEffect, useState } from 'react';
import {
  Flag,
  CalendarDays,
  User,
  StickyNote,
  ClipboardList,
  Trash2,
  Pencil,
  CheckCircle,
} from 'lucide-react';

const MyTasks = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3310/api/task/all');
      const data = await response.json();
      setTodos(data.tasks);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3310/api/task/delete/${id}`, {
        method: 'DELETE',
      });
      setTodos((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const markCompleted = async (id) => {
    try {
      await fetch(`http://localhost:3310/api/task/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'completed' }),
      });
      fetchTodos(); // refresh list
    } catch (error) {
      console.error('Complete error:', error);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-green-100 text-green-700';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-200 text-green-800';
      case 'in-progress':
        return 'bg-blue-200 text-blue-800';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📋 My Tasks</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((task) => (
          <div
            key={task._id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition border-l-4 border-blue-400"
          >
            <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-gray-800">
              <ClipboardList className="text-blue-500" size={20} />
              {task.title}
            </div>

            <p className="text-gray-600 text-sm flex items-start gap-1 mb-3">
              <StickyNote className="text-purple-500" size={16} />
              {task.description}
            </p>

            <div className="text-sm flex flex-col gap-1 mb-3">
              <div className="flex items-center gap-2">
                <Flag size={16} className="text-red-400" />
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-green-500" />
                <span>{new Date(task.dueDate).toLocaleDateString()}</span>
              </div>

              <div className="flex items-center gap-2">
                <User size={16} className="text-yellow-600" />
                <span>{task.assignee || 'Unassigned'}</span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getStatusColor(
                    task.status
                  )}`}
                >
                  {task.status || 'pending'}
                </span>
              </div>
            </div>

            {/* 🔘 Action Buttons */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => markCompleted(task._id)}
                className="flex items-center gap-1 bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                <CheckCircle size={16} />
                Complete
              </button>

              <button
                onClick={() => alert('Edit feature coming soon!')}
                className="flex items-center gap-1 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full text-sm"
              >
                <Pencil size={16} />
                Edit
              </button>

              <button
                onClick={() => deleteTask(task._id)}
                className="flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-full text-sm"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
