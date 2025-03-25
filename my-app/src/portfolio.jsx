import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);


  return (
    <div className={`h-screen flex flex-col justify-between ${darkMode ? "bg-black text-white" : "bg-[#F5F5F5] text-black"} p-8`}>
      {/* Header Section */}
      <header className={`flex justify-end items-center py-4 border-b-4 ${darkMode ? "border-red-500" : "border-black"}`}>
        <nav className="flex items-center gap-4 justify-end">
          <ul className="flex gap-6">
            <Link to="/aboutme"><li className="hover:underline cursor-pointer">About Me</li></Link>
            <a href="https://github.com/jssem001" target="_blank"><li className="hover:underline cursor-pointer">Github</li></a>
          </ul>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full">
            {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-black" />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mt-16 flex flex-col items-center text-center">
        <motion.h2
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm <span className="text-red-500">Josh</span>
        </motion.h2>
        <p className="mt-4 text-lg">A passionate developer bringing ideas to life.</p>
        <Link to='/projects'>
        <motion.button
          className="mt-6 px-6 py-3 bg-black text-white border-4 border-black text-lg font-bold shadow-lg hover:bg-red-500 hover:text-black"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-4 border-t-4 border-black text-center">
        <p>&copy; 2025 Josh Ssemwanga. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
