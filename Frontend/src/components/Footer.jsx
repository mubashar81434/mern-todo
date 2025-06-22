import React from "react";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-center py-3 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      &copy; {new Date().getFullYear()} My Todo App. All rights reserved.
    </footer>
  );
};

export default Footer;
