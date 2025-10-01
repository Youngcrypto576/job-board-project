
"use client";
import { useState } from "react";
import Link from "next/link";
import jobs from "@/lib/jobsdata";

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from jobsData
  const categories = ["All", ...new Set(jobs.map((job) => job.category))];

  // Filter jobs by category
  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Browse Jobs</h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Jobs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-1">{job.company}</p>
            <p className="text-gray-500 mb-3">
              {job.location} • {job.type}
            </p>
            <p className="text-gray-700 mb-4">{job.summary}</p>
            <Link
              href={`/jobs/${job.id}`}
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No jobs available in this category.
        </p>
      )}
    </div>
  );
}
