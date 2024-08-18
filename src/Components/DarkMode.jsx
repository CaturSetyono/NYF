import React, { useEffect } from "react";

const DarkMode = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    const root = document.documentElement;
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
      className="p-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkMode;
