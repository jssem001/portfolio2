import React from "react";
import { motion } from "framer-motion";
import MaxedOut from "./docs/logo.png";
import School from "./docs/school.jpg";
import OasisFM from "./docs/Oasis-fm-logo-1.png";
import tactics from "./docs/tactics.jpg";
import books from "./docs/books.jpg";
import fires from "./docs/fires.jpg";

const featuredApps = [
  {
    id: 1,
    title: "Maxed Out Olympics",
    description:
      "The app is a sports website, providing updates related to the PARIS 2024 olympics.",
    image: MaxedOut,
    github: "https://github.com/jssem001/olympics",
  },
  {
    id: 2,
    title: "Moringa School Management System",
    description:
      "This app is designed to allow administrators, students, and instructors to maximize performance in the project development process.",
    image: School,
    github: "https://github.com/jssem001/moringa-school-mgmt",
  },
  {
    id: 3,
    title: "Oasis Farmers' Market",
    description:
      "This app is designed to be a marketplace for Farmers to shop for and sell food and agricultral products.",
    image: OasisFM,
    github: "https://github.com/jssem001/oasis-food-market",
  },
  {
    id: 4,
    title: "Football League Management System",
    description:
      "This project is a command-line application that allows users to access and manage information about their favorite football mini-league.",
    image: tactics,
    github: "https://github.com/jssem001/leagues-cli-project",
  },
  {
    id: 5,
    title: "Library Application",
    description:
      "A command-line application for borrowing books.",
    image: books,
    github: "https://github.com/jssem001/library-cli",
  },
  {
    id: 6,
    title: "Global Fire Tracking",
    description:
      "An application that tracks fires around the world.",
    image: fires,
    github: "https://huggingface.co/spaces/sesery/fire_spot_tracker",
  },
];

const FeaturedApps = ({ darkMode }) => {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {featuredApps.map((app) => (
         <motion.div
          key={app.id}
          className={`flex items-center p-4 border-4 border-black rounded-md shadow-lg hover:shadow-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
         >
            <img
                src={app.image}
                alt={app.title}
                className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
                <h3 className="text-xl font-bold">{app.title}</h3>
                <p className="text-sm mt-2">{app.description}</p>
                <a
                href={app.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-red-500 hover:underline"
                >
                View More
                </a>
            </div>
         </motion.div>
      ))}
    </section>
  );
};

export default FeaturedApps;
