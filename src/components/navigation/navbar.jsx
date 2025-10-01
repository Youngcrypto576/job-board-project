"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo / Brand */}
      <Link href="/" className="flex items-center text-2xl font-bold">
        <span className="text-black">JobHive</span>
        <span className="text-red-600">:</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link href="/jobs" className="hover:text-blue-600">
          Jobs
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </div>
    </nav>
  );
}
