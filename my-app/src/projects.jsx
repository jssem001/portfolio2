import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { Sun, Moon } from "lucide-react";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showFeaturedData, setShowFeaturedData] = useState(false); // New state for toggling Featured Data section

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
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className={`p-6 ${darkMode ? "bg-blue-900" : "bg-blue-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md cursor-pointer`}
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowFeaturedData(!showFeaturedData)} // Toggle the Featured Data section
        >
          Data Stories
        </motion.div>
        <motion.div className={`p-6 ${darkMode ? "bg-green-900" : "bg-green-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md`} whileHover={{ scale: 1.05 }}>
          Applications
        </motion.div>
        <motion.div className={`p-6 ${darkMode ? "bg-orange-900" : "bg-orange-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md`} whileHover={{ scale: 1.05 }}>
          Exercises
        </motion.div>
      </section>

      {/* Featured Data Section (Hidden by Default) */}
      <AnimatePresence>
        {showFeaturedData && (
          <motion.section 
            className="mt-16"
            initial={{ opacity: 0, y: -20 }} // Animation on entry
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Animation on exit
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`p-4 border-4 border-black shadow-lg hover:shadow-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold">Hot Hand Exploration</h3>
              <p className="text-sm mt-2">
                There is an age-old debate about whether or not a player scoring a high amount of points in a short amount of time is on purpose or if it is completely coincidental. If a basketball player, for example, scores 6 consecutive shots, does that mean they are more likely to make the 7th shot than normal? This was the idea that I covered in this data story.
              </p>
              <a 
                href="https://github.com/jssem001/Hot-hand" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-3 text-red-500 hover:underline"
              >
                View on GitHub
              </a>    
            </motion.div> 
          </motion.section>
        )}
      </AnimatePresence>

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





// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Sun, Moon } from "lucide-react";

// const Projects = () => {
//   const [repos, setRepos] = useState([]);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     fetch("https://api.github.com/users/jssem001/repos")
//       .then((response) => response.json())
//       .then((data) => setRepos(data))
//       .catch((error) => console.error("Error fetching repos:", error));
//   }, []);

//   return (
//     <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-[#F5F5F5] text-black"} p-8`}> 
//       {/* Header Section */}
//       <header className={`flex justify-between items-center py-4 border-b-4 ${darkMode ? "border-red-500" : "border-black"}`}>
//         <h1 className="text-3xl font-bold"><span className="text-red-500"> Josh </span> Ssemwanga</h1>
//         <nav className="flex items-center gap-4">
//           <ul className="flex gap-6">
//             <Link to="/"><li className="hover:underline cursor-pointer">Home</li></Link>
//             <Link to="/aboutme"><li className="hover:underline cursor-pointer">About Me</li></Link>
//             <a href="https://github.com/jssem001" target="_blank"><li className="hover:underline cursor-pointer">Github</li></a>
//           </ul>
//           <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full">
//             {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-black" />}
//           </button>
//         </nav>
//       </header>

//        {/* Categories Section */}
//       <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <motion.div className={`p-6 ${darkMode ? "bg-blue-900" : "bg-blue-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md`} whileHover={{ scale: 1.05 }}>
//           Data Stories
//         </motion.div>
//         <motion.div className={`p-6 ${darkMode ? "bg-green-900" : "bg-green-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md`} whileHover={{ scale: 1.05 }}>
//           Applications
//         </motion.div>
//         <motion.div className={`p-6 ${darkMode ? "bg-orange-900" : "bg-orange-500"} text-white text-center font-bold text-2xl border-black border-4 rounded-md`} whileHover={{ scale: 1.05 }}>
//           Exercises
//         </motion.div>
//       </section>

//       {/* Featured  data section */}
//       <section className="mt-16">
//         <motion.div
//          className={`p-4 border-4 border-black shadow-lg hover:shadow-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
//          whileHover={{ scale: 1.05 }}
//          transition={{ duration: 0.3 }}
//          >
//             <h3 className="text-xl font-bold">Hot Hand Exploration</h3>
//               <p className="text-sm mt-2">There is an age-old debate about whether or not a player scoring a high amount of points in a short amount of time is on purpose or if it is completely coincidental. If a basket player for example scores 6 consecutive shots, do those shots mean that they are more likely to make the 7th shot than normal? This was the idea that I covered in this data story.</p>
//               <a 
//                 href="https://github.com/jssem001/Hot-hand" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="block mt-3 text-red-500 hover:underline"
//               >
//                 View on GitHub
//               </a>    
//         </motion.div> 
//       </section>



//       {/* Projects Section */}
//       <section className="mt-16">
//         <h2 className="text-4xl font-bold border-b-4 border-black inline-block">My GitHub Projects</h2>
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {repos.map((repo) => (
//             <motion.div 
//               key={repo.id} 
//               className={`p-4 border-4 border-black shadow-lg hover:shadow-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-xl font-bold">{repo.name}</h3>
//               <p className="text-sm mt-2">{repo.description || "No description available."}</p>
//               <a 
//                 href={repo.html_url} 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="block mt-3 text-red-500 hover:underline"
//               >
//                 View on GitHub
//               </a>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer className="mt-16 py-4 border-t-4 border-black text-center">
//         <p>&copy; 2025 Joshua. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Projects;
