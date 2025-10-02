"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutLayout({ children }) {
  const pathname = usePathname();

  // Utility for active state
  const linkClass = (path) =>
    `font-medium ${
      pathname === path ? "text-blue-600" : "text-black hover:text-blue-500"
    }`;

  return (
    <div className="p-6">
      {/* Sub-navbar */}
      <nav className="relative flex items-center border-b pb-3 mb-6">
        {/* Left: About Us */}
        <div className="flex-1">
          <Link href="/about" className={linkClass("/about")}>
            About Us
          </Link>
        </div>

        {/* Center: FAQ */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/about/faq" className={linkClass("/about/faq")}>
            FAQ
          </Link>
        </div>

        {/* Right: Safety */}
        <div className="flex-1 text-right">
          <Link href="/about/safety" className={linkClass("/about/safety")}>
            Safety
          </Link>
        </div>
      </nav>

      {/* Page content (About, FAQ, or Safety) */}
      <main>{children}</main>
    </div>
  );
}
