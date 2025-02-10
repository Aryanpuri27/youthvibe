"use client";

import type React from "react";
import { motion } from "framer-motion";
import TimePortal from "./TimePortal";
// import TimePortal from "./TimePortal";

const timePortals = [
  {
    id: 1,
    name: "Future Metropolis",
    year: "2045",
    image:
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 2,
    name: "Ancient Rome",
    year: "75 BC",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1096&q=80",
  },
  {
    id: 3,
    name: "Medieval Castle",
    year: "1242",
    image:
      "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 4,
    name: "Renaissance Florence",
    year: "1500",
    image:
      "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    name: "Industrial Revolution",
    year: "1850",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80",
  },
  {
    id: 6,
    name: "Roaring Twenties",
    year: "1925",
    image:
      "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 7,
    name: "Space Age",
    year: "1969",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
  },
  {
    id: 8,
    name: "Cyberpunk Era",
    year: "2077",
    image:
      "https://images.unsplash.com/photo-1515630278258-407f66498911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  },
];

const BentoTimeGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex flex-col items-center justify-center">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TimePortal
          {...timePortals[0]}
          className="col-span-1 md:col-span-2 row-span-2"
        />
        <TimePortal {...timePortals[1]} />
        <TimePortal {...timePortals[2]} />
        <TimePortal {...timePortals[3]} />
        <TimePortal {...timePortals[4]} />
        <TimePortal {...timePortals[5]} className="col-span-1 md:col-span-2" />
        <TimePortal {...timePortals[6]} />
        <TimePortal {...timePortals[7]} className="col-span-1 md:col-span-2" />
      </motion.div>
      <p className="text-white text-sm mt-4">Images from Unsplash</p>
    </div>
  );
};

export default BentoTimeGrid;
