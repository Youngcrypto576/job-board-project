"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      className="flex items-center justify-between p-10 bg-gray-50 min-h-[400px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <h1 className="text-4xl font-bold mb-4">Find Your Next Career</h1>
        <p className="text-lg text-gray-600">
          "Discover a handpicked selection of opportunities across key industries including Technology, Finance, Marketing, Design, and Education. Explore curated jobs tailored to diverse professional passions and expertise, connecting you with roles that align with your skills and aspirations."

        </p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Explore Jobs
        </button>
      </div>
      <Image src="/carrer.png" alt="Hero illustration" width={600} height={600} />
    </motion.section>
  );
}
