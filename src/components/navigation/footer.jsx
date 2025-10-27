import { Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 mt-10">
      <div className="container mx-auto text-center text-sm text-white">
        <p className="flex justify-center items-center gap-2">
          Created by EmDev <Flame className="w-4 h-4 text-orange-400" />
        </p>
        <p>Copyright © 2025 JobHive. All rights reserved.</p>
      </div>
    </footer>
  );
}