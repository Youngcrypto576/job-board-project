"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center text-2xl font-bold">
          <span className="text-black">JobHive</span>
          <span className="text-red-600">:</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/jobs" className="hover:text-blue-600">Jobs</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-4 space-y-3">
          <Link href="/" className="block hover:text-blue-600">Home</Link>
          <Link href="/about" className="block hover:text-blue-600">About</Link>
          <Link href="/jobs" className="block hover:text-blue-600">Jobs</Link>
          <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}
