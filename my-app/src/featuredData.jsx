import React from "react";
import { motion } from "framer-motion";
import HotHand from "./docs/Hot_Hand_Fallacy.webp";
import KDshot from "./docs/KD_shot.jpg";
import IPL from "./docs/IPL.png";
import footy from "./docs/footy.jpg";
import fires from "./docs/fires.jpg";

const featuredData = [
  {
    id: 1,
    title: "Hot Hand Exploration",
    description:
      "Analyzing whether streaks in sports performance are statistically significant.",
    image: HotHand,
    github: "https://github.com/jssem001/Hot-hand",
  },
  {
    id: 2,
    title: "NBA Players Shooting Graphs",
    description:
      "Visualization of shooting statistics for select NBA players.",
    image: KDshot,
    github: "https://github.com/jssem001/NBA-player-shooting",
  },
  {
    id: 3,
    title: "IPL Games Comparisons",
    description:
      "Using IPL 2018 data to analyze scoring trends of different teams.",
    image: IPL,
    github: "https://github.com/jssem001/IPL-games-comparison",
  },
  {
    id: 4,
    title: "Football and Pythagorean Expectation",
    description:
      "Examining PPG and Pythagorean expectation in the English Premier League.",
    image: footy,
    github: "https://github.com/jssem001/Pythagorean-expectation",
  },
  {
    id: 5,
    title: "Global Fire Tracking",
    description:
      "An application that tracks fires around the world.",
    image: fires,
    github: "https://huggingface.co/spaces/sesery/fire_spot_tracker",
  },
];

const FeaturedData = ({ darkMode }) => {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {featuredData.map((app) => (
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
                View on GitHub
                </a>
            </div>
         </motion.div>
      ))}
    </section>
  );
};

export default FeaturedData;
