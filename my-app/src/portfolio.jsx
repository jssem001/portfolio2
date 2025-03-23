import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Portfolio = () => {
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
      <header className="flex justify-between items-center py-4 border-b-4 border-black">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav className="flex items-center gap-4">
          <ul className="flex gap-6">
            <Link to="/aboutme"><li className="hover:underline cursor-pointer">About</li></Link>
            <li className="hover:underline cursor-pointer">Projects</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 border-2 border-black rounded-full">
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
        <motion.button
          className="mt-6 px-6 py-3 bg-black text-white border-4 border-black text-lg font-bold shadow-lg hover:bg-red-500 hover:text-black"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.button>
      </section>

      {/* About Section */}
      {/* <section className={`mt-16 p-6 border-4 border-black shadow-lg ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <h2 className="text-4xl font-bold border-b-4 border-black inline-block">About Me</h2>
        <div className="mt-6 text-lg">
          <h3 className="text-2xl font-bold">Where Have I Been?</h3>
          <ul className="list-disc pl-6">
            <li>Born in Kampala, Uganda.</li>
            <li>Currently based in Nairobi, Kenya.</li>
            <li>Traveled to parts of Africa, Europe, and the USA.</li>
          </ul>
          <h3 className="text-2xl font-bold mt-4">What Have I Done?</h3>
          <ul className="list-disc pl-6">
            <li>Currently training to be a Software Engineer at Moringa School.</li>
            <li>Holds a bachelor's degree in Computer Science.</li>
            <li>Background in Data Analytics.</li>
          </ul>
          <h3 className="text-2xl font-bold mt-4">What Are My Interests?</h3>
          <ul className="list-disc pl-6">
            <li>Enjoys outdoor activities.</li>
            <li>Passionate about sports and helping others.</li>
            <li>Currently developing an app for African athletes and sports fans.</li>
          </ul>
        </div>
      </section> */}

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

export default Portfolio;
