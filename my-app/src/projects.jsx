import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/jssem001/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-[#F5F5F5] text-black"} p-8`}> 
      {/* Header Section */}
      <header className={`flex justify-between items-center py-4 border-b-4 ${darkMode ? "border-red-500" : "border-black"}`}>
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav className="flex items-center gap-4">
          <ul className="flex gap-6">
            <Link to="/"><li className="hover:underline cursor-pointer">Home</li></Link>
            <Link to="/aboutme"><li className="hover:underline cursor-pointer">About Me</li></Link>
            <a href="https://github.com/jssem001" target="_blank"><li className="hover:underline cursor-pointer">Github</li></a>
          </ul>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 border-2 border-black rounded-full">
            {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-black" />}
          </button>
        </nav>
      </header>

       {/* Categories Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div className={`p-6 ${darkMode ? "bg-blue-900" : "bg-blue-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md`} whileHover={{ scale: 1.05 }}>
          Data
        </motion.div>
        <motion.div className={`p-6 ${darkMode ? "bg-green-900" : "bg-green-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md`} whileHover={{ scale: 1.05 }}>
          Applications
        </motion.div>
        <motion.div className={`p-6 ${darkMode ? "bg-orange-900" : "bg-orange-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md`} whileHover={{ scale: 1.05 }}>
          Exercises
        </motion.div>
      </section>



      {/* Projects Section */}
      <section className="mt-16">
        <h2 className="text-4xl font-bold border-b-4 border-black inline-block">My GitHub Projects</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {repos.map((repo) => (
            <motion.div 
              key={repo.id} 
              className={`p-4 border-4 border-black shadow-lg hover:shadow-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p className="text-sm mt-2">{repo.description || "No description available."}</p>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-3 text-red-500 hover:underline"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-4 border-t-4 border-black text-center">
        <p>&copy; 2025 Joshua. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;
