"use client";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  { id: 1, name: "Technology", icon: "💻" },
  { id: 2, name: "Finance", icon: "💰" },
  { id: 3, name: "Marketing", icon: "📢" },
  { id: 4, name: "Design", icon: "🖼️" },
  { id: 5, name: "Education", icon: "📚" },
];

export default function Categories() {
  return (
    <motion.section
      className="p-10 bg-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="border-2 border-red-600 border-dashed inline-block px-6 py-3 mb-8">
        <h2 className="flex items-center justify-center gap-2">
          <span className="text-3xl font-extrabold text-black">JobHive</span>
          <span className="text-red-600 text-3xl font-extrabold">:</span>
          <span className="text-5xl font-extrabold text-black">
            Find what&apos;s next
          </span>
        </h2>
      </div>

      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {categories.map((category) => (
            <CarouselItem
              key={category.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <div className="p-6 border rounded-lg text-center shadow-sm">
                <span className="text-4xl">{category.icon}</span>
                <p className="mt-2 text-lg font-semibold">{category.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.section>
  );
}
