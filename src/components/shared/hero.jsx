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
          Explore curated jobs across Tech, Finance, Marketing, Health, and Education.
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Browse Jobs
        </button>
      </div>
      <Image src="/hero.png" alt="Hero illustration" width={400} height={400} />
    </motion.section>
  );
}
