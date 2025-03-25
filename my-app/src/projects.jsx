import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { Sun, Moon } from "lucide-react";
import HotHand from "./docs/Hot_Hand_Fallacy.webp";
import KDshot from "./docs/KD_shot.jpg";
import IPL from "./docs/IPL.png";
import footy from "./docs/footy.jpg";
import FeaturedApps from "./featuredApps";

const Projects = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showFeaturedData, setShowFeaturedData] = useState(false); // New state for toggling Featured Data section
  const [showFeaturedApps, setShowFeaturedApps] = useState(false);


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

      {/* Featured Data Section (Hidden by Default) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AnimatePresence>
        {showFeaturedData && (
          <motion.section 
            className="mt-8"
            initial={{ opacity: 0, y: -20 }} // Animation on entry
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Animation on exit
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`flex items-center p-4 border-4 border-black rounded-md shadow-lg hover:shadow-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={HotHand}  
                alt="Hot Hand Exploration"
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
              <h3 className="text-xl font-bold">Hot Hand Exploration</h3>
              <p className="text-sm mt-2">
                There is an age-old debate about whether or not a player scoring a high amount of points in a short amount of time is on purpose or if it is completely coincidental. This is the idea that I cover in this story using the NBA.
              </p>
              <a 
                href="https://github.com/jssem001/Hot-hand" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-3 text-red-500 hover:underline"
              >
                View on GitHub
              </a>
              </div>    
            </motion.div> 
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFeaturedData && (
          <motion.section 
            className="mt-8"
            initial={{ opacity: 0, y: -20 }} // Animation on entry
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Animation on exit
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`flex items-center p-4 border-4 border-black rounded-md shadow-lg hover:shadow-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={KDshot}  
                alt="Hot Hand Exploration"
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1 mb-5">
              <h3 className="text-xl font-bold">NBA Players Shooting Graphs</h3>
              <p className="text-sm mt-2">
              A look at NBA players' shooting statistics. This story shows a visualization of the kinds of shots taken by a select group of ballers in the league.              </p>
              <a 
                href="https://github.com/jssem001/NBA-player-shooting" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-3 text-red-500 hover:underline"
              >
                View on GitHub
              </a>
              </div>    
            </motion.div> 
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFeaturedData && (
          <motion.section 
            className="mt-4"
            initial={{ opacity: 0, y: -20 }} // Animation on entry
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Animation on exit
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`flex items-center p-4 border-4 border-black rounded-md shadow-lg hover:shadow-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={IPL}  
                alt="Hot Hand Exploration"
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
              <h3 className="text-xl font-bold">IPL Games Comparisons</h3>
              <p className="text-sm mt-2">
              Using data from the 2018 IPL season, I investigated how different teams scored points throughout a game. To do this I generated run/wickets curves for select teams in the league.</p>
              <a 
                href="https://github.com/jssem001/IPL-games-comparison" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-3 text-red-500 hover:underline"
              >
                View on GitHub
              </a>
              </div>    
            </motion.div> 
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFeaturedData && (
          <motion.section 
            className="mt-4"
            initial={{ opacity: 0, y: -20 }} // Animation on entry
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Animation on exit
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`flex items-center p-4 border-4 border-black rounded-md shadow-lg hover:shadow-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={footy}  
                alt="Hot Hand Exploration"
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
              <h3 className="text-xl font-bold">Football and Pythagorean Expectation</h3>
              <p className="text-sm mt-2">
              This notebook looks at the relationship between points per game PPG and the Pythagorean expectation in professional team sports. This was done using English Premier League EPL data for the 2017/2018 season.</p>
              <a 
                href="https://github.com/jssem001/Pythagorean-expectation" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-3 text-red-500 hover:underline"
              >
                View on GitHub
              </a>
              </div>    
            </motion.div> 
          </motion.section>
        )}
      </AnimatePresence>
      </section>
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
            <FeaturedApps />
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
