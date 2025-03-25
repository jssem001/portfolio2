import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { Sun, Moon } from "lucide-react";
import FeaturedApps from "./featuredApps";
import FeaturedData from "./featuredData";

const Projects = () => {
  const [showFeaturedData, setShowFeaturedData] = useState(false);
  const [showFeaturedApps, setShowFeaturedApps] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("darkMode") === "true";
    });
  
    useEffect(() => {
      localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);


  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-[#F5F5F5] text-black"} p-8`}> 
      {/* Header Section */}
      <header className={`flex justify-between items-center py-4 border-b-4 ${darkMode ? "border-red-500" : "border-black"}`}>
        <h1 className="text-3xl font-bold"><span className="text-red-500"> Josh </span> Ssemwanga</h1>
        <nav className="flex items-center gap-4">
          <ul className="flex gap-6">
            <Link to="/"><li className="hover:underline cursor-pointer">Home</li></Link>
            <Link to="/aboutme"><li className="hover:underline cursor-pointer">About Me</li></Link>
            <a href="https://github.com/jssem001" target="_blank"><li className="hover:underline cursor-pointer">Github</li></a>
          </ul>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full">
            {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-black" />}
          </button>
        </nav>
      </header>

      {/* Categories Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className={`p-6 ${darkMode ? "bg-blue-900" : "bg-blue-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md cursor-pointer`}
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowFeaturedData(!showFeaturedData)} // Toggle the Featured Data section
        >
          Data Stories
        </motion.div>
        <motion.div 
         className={`p-6 ${darkMode ? "bg-green-900" : "bg-green-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md`} 
         whileHover={{ scale: 1.05 }}
         onClick={() => setShowFeaturedApps(!showFeaturedApps)}
        >
          Applications
        </motion.div>
      </section>

      {/* Featured Data Section */}
      <AnimatePresence>
        {showFeaturedData && (
        <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.5 }}
        >
            <FeaturedData darkMode={darkMode}/>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Applications Section */}
      <AnimatePresence>
        {showFeaturedApps && (
        <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.5 }}
        >
            <FeaturedApps darkMode={darkMode}/>
        </motion.div>
        )}
      </AnimatePresence>      

      {/* Footer */}
      <footer className="mt-16 py-4 border-t-4 border-black text-center">
        <p>&copy; 2025 Josh Ssemwanga. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;
