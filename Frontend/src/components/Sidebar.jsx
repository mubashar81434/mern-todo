import React, { useState } from "react";
import { Home, ListTodo, Settings, Menu, Plus, CheckCircle, Trash2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden p-4 bg-black text-white dark:bg-black dark:text-white">
        <button onClick={() => setOpen(!open)} className="focus:outline-none">
          <Menu />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white dark:bg-black text-black dark:text-white w-64 p-4 space-y-4 fixed md:static z-50 transform transition-transform duration-300 dark:border-gray-500 border-r h-screen ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <nav className="space-y-2">
          {[
            { to: "/", icon: <Home size={18} />, label: "Dashboard" },
            { to: "/my-tasks", icon: <ListTodo size={18} />, label: "My Tasks" },
            { to: "/add-task", icon: <Plus size={18} />, label: "Add Task" },
            { to: "/completed-tasks", icon: <CheckCircle size={18} />, label: "Completed Tasks" },
            { to: "/deleted-tasks", icon: <Trash2 size={18} />, label: "Deleted Tasks" },
            { to: "/settings", icon: <Settings size={18} />, label: "Settings" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                  isActive ? "bg-gray-100 dark:bg-gray-800" : ""
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
