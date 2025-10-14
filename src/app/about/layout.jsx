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
  <nav className="flex justify-center space-x-8 border-b pb-3 mb-6">
    <Link href="/about" className={linkClass("/about")}>
      About Us
    </Link>
    <Link href="/about/faq" className={linkClass("/about/faq")}>
      FAQ
    </Link>
    <Link href="/about/safety" className={linkClass("/about/safety")}>
      Safety
    </Link>
  </nav>

  {/* Page content (About, FAQ, or Safety) */}
  <main>{children}</main>
</div>
  );
}
