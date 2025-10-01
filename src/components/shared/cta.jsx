"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <motion.section
      className="bg-indigo-700 py-16 mt-16 text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-extrabold mb-4">
        Ready to find your next job?
      </h2>
      <p className="text-lg mb-6">
        Explore opportunities in technology, finance, marketing, health, and
        education today.
      </p>
      <Link
        href="/jobs"
        className="inline-block px-8 py-4 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
      >
        Browse Jobs
      </Link>
    </motion.section>
  );
}
