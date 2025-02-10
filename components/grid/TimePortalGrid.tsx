"use client";

import type React from "react";
import { motion } from "framer-motion";

const timePortals = [
  { id: 1, year: "2045" },
  { id: 2, year: "1985" },
  { id: 3, year: "3000" },
  { id: 4, year: "1692" },
  { id: 5, year: "2199" },
  { id: 6, year: "1969" },
  { id: 7, year: "2525" },
  { id: 8, year: "1066" },
  { id: 9, year: "3500" },
];

const TimePortalGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      <motion.div
        className="grid grid-cols-3 gap-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {timePortals.map((portal, index) => (
          <motion.div
            key={portal.id}
            className="w-40 h-40 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="text-white text-2xl font-bold z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {portal.year}
            </motion.div>
            <motion.div
              className="absolute w-full h-full"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(104,85,224,1) 0%, rgba(0,0,0,0) 70%)",
                  "radial-gradient(circle, rgba(85,224,224,1) 0%, rgba(0,0,0,0) 70%)",
                  "radial-gradient(circle, rgba(224,85,104,1) 0%, rgba(0,0,0,0) 70%)",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute w-20 h-20 border-t-4 border-l-4 border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute w-32 h-32 border-b-4 border-r-4 border-blue-300 rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 15,
                ease: "linear",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TimePortalGrid;
