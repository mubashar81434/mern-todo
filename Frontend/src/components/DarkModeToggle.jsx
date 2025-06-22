import React from "react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeToggle = ({ className, size }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`${className} ml-auto p-2 rounded transition`}
    >
      {darkMode ? (
        <Sun size={size ? size : 20} />
      ) : (
        <Moon size={size ? size : 20} />
      )}
    </button>
  );
};

export default DarkModeToggle;
