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
            <a href="https://drive.google.com/file/d/1mAQbV1PQrV73VxxJpWJQzNu-8O-IOpNB/view?usp=sharing" target="_blank"><li className="hover:underline cursor-pointer">Resume</li></a>
            <a href="https://www.linkedin.com/in/joshua-ssemwanga2001/" target="_blank"><li className="hover:underline cursor-pointer">LinkedIn</li></a>
          </ul>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full">
            {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-black" />}
          </button>
        </nav>
      </header>


      {/* About Section */}
      <section className={`mt-16 p-6 border-4 border-black shadow-lg ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <h2 className="text-4xl font-bold inline-block">About Me</h2>
        <div className="mt-6 text-lg">
          <dl className="list-disc pl-6">
            {/* <li>Location: Uganda and Kenya  </li> */}
            <dt><span className="font-bold">Training</span> BSc Computer Science (2022), Data Analytics certificate (2022), Full Stack Development certificate (2024)</dt>
            <dt><span className="font-bold">My Tech Stack</span></dt>
            <dd>Languages: Python, JavaScript, SQL </dd>
            <dd>Frameworks: React, Node.js, Tailwind CSS, Vue.js, Flask</dd>
            <dd>Databases: MySQL, PostgreSQL</dd>
            <dd>Tools: VS Code, Github, Jupyter Labs</dd>
            {/* <dd>APIs: Google Maps API, OpenWeather API, OpenAI API.</dd> */}
            <dt><span className="font-bold">Interests</span> Sports, Education, Healthcare</dt>
          </dl>
          {/* <h4 className="text-2xl font-bold mt-4">What I Do</h4>
          <dl className="list-disc pl-6">
            <dt>Create.</dt>
            <dt>Analyse.</dt>
            <dt>Educate.</dt>
          </dl> */}
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
