"use client";
import { motion } from "framer-motion";


export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-indigo-700 py-20 text-center text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions or feedback? We’d love to hear from you. Fill out the
          form below and our team will respond shortly.
        </p>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-500 transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Extra Contact Info */}
      <motion.section
        className="text-center py-12 text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
       <p className="mb-2">
  📧 Email us at:{" "}
  <a
    href="mailto:support@jobhive.com"
    className="font-semibold text-blue-600 hover:underline"
  >
    support@jobhive.com
  </a>
</p>
<p>📍 Lagos, Nigeria</p>
      </motion.section>
    </div>
  );
}
``
