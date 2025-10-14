"use client";
import { useParams } from "next/navigation";
import jobs from "@/lib/jobsdata";

export default function JobDetailsPage() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Job not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-10 bg-white shadow rounded-lg mt-10">
      {/* Job Info */}
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-2">{job.company}</p>
      <p className="text-gray-500 mb-6">
        {job.location} • {job.type}
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>
      {/* Additional Job Details */}
{job.salary && (
  <p className="text-gray-700 mb-2">
    <strong>💰 Salary:</strong> {job.salary}
  </p>
)}

{job.responsibilities && (
  <div className="mb-4">
    <h3 className="font-semibold text-lg mb-2">🧩 Responsibilities:</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      {job.responsibilities.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
    </ul>
  </div>
)}

{job.qualifications && (
  <div className="mb-4">
    <h3 className="font-semibold text-lg mb-2">🎓 Required Qualifications:</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      {job.qualifications.map((qual, i) => (
        <li key={i}>{qual}</li>
      ))}
    </ul>
  </div>
)}

{job.benefits && (
  <div className="mb-4">
    <h3 className="font-semibold text-lg mb-2">🎁 Benefits:</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      {job.benefits.map((benefit, i) => (
        <li key={i}>{benefit}</li>
      ))}
    </ul>
  </div>
)}

{job.reportingTo && (
  <p className="text-gray-700 mb-2">
    <strong>📋 Reports To:</strong> {job.reportingTo}
  </p>
)}

{job.companyInfo && (
  <p className="text-gray-700 mb-6">
    <strong>🏢 About the Company:</strong> {job.companyInfo}
  </p>
)}


      {/* Apply Form */}
      <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
      <form
        action="https://formsubmit.co/cashpopbnb@gmail.com"
        method="POST"
        className="space-y-4"
        encType="multipart/form-data"
      >
        {/* Formsubmit settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg"
          required
        />

        {/* Dropdown for Nigerian States */}
        <select
          name="location"
          className="w-full p-3 border rounded-lg"
          required
        >
          <option value="">Select Location</option>
          <option value="Abia">Abia</option>
          <option value="Adamawa">Adamawa</option>
          <option value="Akwa Ibom">Akwa Ibom</option>
          <option value="Anambra">Anambra</option>
          <option value="Bauchi">Bauchi</option>
          <option value="Bayelsa">Bayelsa</option>
          <option value="Benue">Benue</option>
          <option value="Borno">Borno</option>
          <option value="Cross River">Cross River</option>
          <option value="Delta">Delta</option>
          <option value="Ebonyi">Ebonyi</option>
          <option value="Edo">Edo</option>
          <option value="Ekiti">Ekiti</option>
          <option value="Enugu">Enugu</option>
          <option value="FCT (Abuja)">FCT (Abuja)</option>
          <option value="Gombe">Gombe</option>
          <option value="Imo">Imo</option>
          <option value="Jigawa">Jigawa</option>
          <option value="Kaduna">Kaduna</option>
          <option value="Kano">Kano</option>
          <option value="Katsina">Katsina</option>
          <option value="Kebbi">Kebbi</option>
          <option value="Kogi">Kogi</option>
          <option value="Kwara">Kwara</option>
          <option value="Lagos">Lagos</option>
          <option value="Nasarawa">Nasarawa</option>
          <option value="Niger">Niger</option>
          <option value="Ogun">Ogun</option>
          <option value="Ondo">Ondo</option>
          <option value="Osun">Osun</option>
          <option value="Oyo">Oyo</option>
          <option value="Plateau">Plateau</option>
          <option value="Rivers">Rivers</option>
          <option value="Sokoto">Sokoto</option>
          <option value="Taraba">Taraba</option>
          <option value="Yobe">Yobe</option>
          <option value="Zamfara">Zamfara</option>
        </select>

        <input
          type="text"
          name="experience"
          placeholder="Work Experience / Qualification"
          className="w-full p-3 border rounded-lg"
          required
        />

        <textarea
          name="coverLetter"
          placeholder="Cover Letter"
          rows="4"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="file"
          name="resume"
          className="w-full p-3 border rounded-lg"
          accept=".pdf,.doc,.docx"
          required
        />

        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
}
