"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 p-6 md:p-10 bg-gray-50 min-h-[400px] text-center md:text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Your Next Career
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Discover a handpicked selection of opportunities across key industries including Technology, Finance, Marketing, Design, and Education. Explore curated jobs tailored to diverse professional passions and expertise, connecting you with roles that align with your skills and aspirations.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Explore Jobs
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/carrer.png"
          alt="Career illustration"
          width={600}
          height={600}
          className="w-3/4 md:w-full h-auto object-contain"
        />
      </div>
    </motion.section>
  );
}
