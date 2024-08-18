import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-gray-800 text-white dark:bg-white dark:text-black"
      >
        Toggle Dark Mode
      </button>
      <div className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
        <h1 className="text-2xl">Hello, World!</h1>
        <p>This is a sample text.</p>
      </div>
    </div>
  );
};

export default DarkMode;
