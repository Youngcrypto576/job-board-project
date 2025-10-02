"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section with Background */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image
          src="/about.png" // ✅ 
          alt="About JobHive background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4">
            About <span className="text-white">JobHive:</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            JobHive: is your trusted platform for discovering exciting career opportunities in Technology, Finance, Marketing, Design, and Education. Our mission is simple: to connect job seekers with the roles that matter most and make the job hunt less stressful, more transparent, and more rewarding.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <motion.section
        className="max-w-5xl mx-auto px-6 py-16 space-y-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Intro */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            JobHive is a modern job-matching platform built to empower the next
            generation of professionals. In today’s competitive world, job
            seekers face countless hurdles: endless searches across multiple
            websites, vague descriptions, and applications that feel like they
            lead nowhere. JobHive was created to change that story.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our platform simplifies the process by bringing opportunities
            together in one place, offering clarity with well-structured job
            details, and providing an easy way to apply. We are not just a job
            board — we are a bridge between ambition and opportunity.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At JobHive, our mission is simple: to connect job seekers with roles
            that truly matter. We believe every individual deserves access to
            transparent, relevant, and rewarding opportunities. Whether you’re
            taking your first step into the workforce or looking for your next
            career move, JobHive is designed to make the process straightforward
            and effective.
          </p>
        </div>

        {/* Vision */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a future where finding a job is no longer stressful or
            uncertain, but empowering. A future where candidates are matched not
            only to job titles but to career paths that align with their skills,
            interests, and goals. Through innovation and simplicity, JobHive aims
            to become the go-to destination for young professionals seeking to
            shape their future.
          </p>
        </div>

        {/* How it Works */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">How JobHive Works</h2>
          <p className="text-gray-700 leading-relaxed">
            Using JobHive is as simple as three steps:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Browse categories and explore opportunities across industries.</li>
            <li>Open job pages for full details, responsibilities, and requirements.</li>
            <li>Apply instantly with our easy-to-use application form.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            With JobHive, you don’t need to waste time hopping from one platform
            to another. Everything you need is right here.
          </p>
        </div>
      </motion.section>
    </main>
  );
}
