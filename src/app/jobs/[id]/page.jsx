"use client";
import { useParams } from "next/navigation";
import jobs from "@/lib/jobsdata";
import { useState } from "react";

export default function JobDetailsPage() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: "",
  });

  if (!job) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Job not found</h1>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${job.title}!`);
    setForm({ name: "", email: "", resume: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-10 bg-white shadow rounded-lg mt-10">
      {/* Job Info */}
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-2">{job.company}</p>
      <p className="text-gray-500 mb-6">
        {job.location} • {job.type}
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

      {/* Apply Form */}
      <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="resume"
          value={form.resume}
          onChange={handleChange}
          placeholder="Paste your resume / cover letter here..."
          rows="4"
          className="w-full p-3 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
