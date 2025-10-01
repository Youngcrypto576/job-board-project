"use client";
import { motion } from "framer-motion";
import { Briefcase, FileText, Zap, BadgeCheck } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    title: "Easy Job Search",
    desc: "Quickly find jobs across multiple categories in one place.",
  },
  {
    id: 2,
    icon: <FileText className="w-10 h-10 text-green-600" />,
    title: "Clear Descriptions",
    desc: "No more confusing listings — we keep job details simple and clear.",
  },
  {
    id: 3,
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    title: "Quick Apply",
    desc: "Fill out a short form to apply — no endless steps.",
  },
  {
    id: 4,
    icon: <BadgeCheck className="w-10 h-10 text-purple-600" />,
    title: "Free to Use",
    desc: "Access job opportunities at no cost.",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      className="p-10 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-extrabold text-center mb-10">
        Why Choose <span className="text-blue-600">JobHive</span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 border rounded-lg shadow-sm bg-white text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
