import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "JobHive - Find Your Next Job",
  description: "JobHive is a job board platform where you can explore categories, apply for jobs, and build your career.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
         <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
