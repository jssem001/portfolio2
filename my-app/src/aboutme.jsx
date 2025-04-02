import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const About = () => {
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
            <a href="https://drive.google.com/file/d/1vT4DZjWVj-AT1omgoEqJ-tQE9G1cZhMq/view?usp=sharing" target="_blank"><li className="hover:underline cursor-pointer">Resume</li></a>
            <a href="https://www.linkedin.com/in/joshua-ssemwanga2001/" target="_blank"><li className="hover:underline cursor-pointer">LinkedIn</li></a>
          </ul>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full">
            {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-black" />}
          </button>
        </nav>
      </header>


      {/* About Section */}
      <section className={`mt-16 p-6 border-4 border-black shadow-lg ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <h2 className="text-4xl font-bold border-b-4 border-black inline-block">About Me</h2>
        <div className="mt-6 text-lg">
          {/* <h3 className="text-2xl font-bold">Where Have I Been?</h3>
          <ul className="list-disc pl-6">
            <li>Born in Kampala, Uganda.</li>
            <li>Currently based in Nairobi, Kenya.</li>
            <li>Traveled to parts of Africa, Europe, and the USA.</li>
          </ul> */}
          <h3 className="text-2xl font-bold mt-4">What Have I Done?</h3>
          <ul className="list-disc pl-6">
            <li>Hold a bachelor's degree in Computer Science.</li>
            <li>Trained in Data Science and Full Stack Development.</li>
            <li>Current tech stack: </li>
          </ul>
          <h3 className="text-2xl font-bold mt-4">What Are My Interests?</h3>
          <ul className="list-disc pl-6">
            <li>Enjoys outdoor activities.</li>
            <li>Passionate about sports and helping others.</li>
            <li>Currently developing an app for African athletes and sports fans.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-4 border-t-4 border-black text-center">
        <p>&copy; 2025 Josh Ssemwanga. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
