import React, { useState } from "react";
import {
  Home,
  ListTodo,
  Settings,
  Menu,
  Plus,
  CheckCircle,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/", icon: <Home className="text-indigo-500" size={20} />, label: "Dashboard" },
    { to: "/my-tasks", icon: <ListTodo className="text-blue-500" size={20} />, label: "My Tasks" },
    { to: "/add-task", icon: <Plus className="text-green-500" size={20} />, label: "Add Task" },
    { to: "/completed-tasks", icon: <CheckCircle className="text-emerald-500" size={20} />, label: "Completed Tasks" },
    { to: "/deleted-tasks", icon: <Trash2 className="text-red-500" size={20} />, label: "Deleted Tasks" },
    { to: "/settings", icon: <Settings className="text-yellow-500" size={20} />, label: "Settings" },
  ];

  return (
    <>
      {/* 🔹 Mobile Top Bar with Hamburger */}
      <div className="md:hidden flex items-center justify-between p-4 bg-black text-white fixed w-full z-50">
        <h2 className="text-lg font-semibold">Task Manager</h2>
        <button onClick={() => setMobileOpen(true)} className="focus:outline-none">
          <Menu size={24} />
        </button>
      </div>

      {/* 🔸 Sidebar for both Desktop and Mobile */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-white dark:bg-black border-r dark:border-gray-700 p-4 transition-all duration-300 ease-in-out
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:relative md:flex
        ${collapsed ? "w-20" : "w-64"}
      `}
      >
        {/* ❌ Close Button for Mobile */}
        <div className="md:hidden flex justify-between items-center mb-4">
          {/* <h2 className="text-lg font-bold text-black dark:text-white">Menu</h2> */}
          <button onClick={() => setMobileOpen(false)} className="text-gray-600 dark:text-gray-300 ml-3">
            <X size={20} />
          </button>
        </div>

        {/* ⬅️ Collapse Button (Desktop only) */}
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute hidden md:block -right-3 top-14  bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-full p-[1px] shadow-md z-50 hover:scale-105 transition-transform"
        >
          {collapsed ? <ChevronRight className="text-indigo-500" size={18} /> : <ChevronLeft className="text-indigo-500" size={18} />}
        </button>

        {/* Navigation Links */}
        <nav className="space-y-2 mt-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)} // close sidebar on mobile link click
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md transition-all font-medium ${
                  isActive
                    ? "bg-gray-100 dark:bg-gray-800 border-l-4 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              <span>{item.icon}</span>
              {!collapsed && <span className="transition-opacity duration-200">{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* 🔘 Backdrop for Mobile Sidebar */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
