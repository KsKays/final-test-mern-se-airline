import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

// ข้อมูลเมืองท่องเที่ยว
const destinations = [
  {
    name: "Bangkok",
    description: "The capital city of Thailand.",
    image:
      "https://ak-d.tripcdn.com/images/0104112000aq7b2v07E42_W_300_300.jpg",
    location: "Thailand",
  },
  {
    name: "Chiang Mai",
    description: "Known for its temples and mountains.",
    image:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1676628529/blog/ypntpmyq4qsgaoqnwgvm.jpg",
    location: "Thailand",
  },
  {
    name: "Phuket",
    description: "Famous for its beaches.",
    image:
      "https://www.kkday.com/th/blog/wp-content/uploads/jpg-2022-09-22T115858.796.jpeg",
    location: "Thailand",
  },
  {
    name: "Ayutthaya",
    description: "Historical city of Thailand.",
    image:
      "https://mushroomtravelpage.b-cdn.net/wp-content/uploads/2019/01/Merlion-shutterstock_1060601222.png",
    location: "Thailand",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-5xl text-center text-gray-900 font-extrabold mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Explore Thailand with Nakhon Pathom Airline
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-red-500 mr-2" />
                <span className="text-sm text-gray-500">
                  {destination.location}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {destination.name}
              </h2>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none hover:bg-blue-700 transition duration-300"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
