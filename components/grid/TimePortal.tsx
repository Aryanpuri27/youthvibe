"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TimePortalProps {
  id: number;
  name: string;
  year: string;
  image: string;
  className?: string;
}

const TimePortal: React.FC<TimePortalProps> = ({
  id,
  name,
  year,
  image,
  className,
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      whileHover={{ scale: 1.05, zIndex: 1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: id * 0.1 }}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-30" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <motion.h2
          className="text-white text-2xl font-bold mb-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: id * 0.1 + 0.2 }}
        >
          {name}
        </motion.h2>
        <motion.p
          className="text-white text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: id * 0.1 + 0.3 }}
        >
          {year}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TimePortal;
