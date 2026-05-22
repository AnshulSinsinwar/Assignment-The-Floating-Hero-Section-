"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

const navItems = ["Features", "Matters", "Billing", "Documents", "Pricing"];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        sticky top-0 z-50 w-full
        bg-white/60 dark:bg-[#0F1117]/60
        backdrop-blur-xl
        border-b border-white/50 dark:border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-lg flex items-center justify-center shadow-md">
            <Scale size={16} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-extrabold text-[18px] tracking-tight text-[#1E2A3A] dark:text-white">
            praava<span className="text-[#3B5BDB]">legal</span>
          </span>
        </div>

        {/* Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="
                text-[14px] font-medium
                text-[#4B5568] dark:text-gray-300
                hover:text-[#3B5BDB] dark:hover:text-[#5C7CFA]
                transition-colors duration-200
              "
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA + Dark mode */}
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <a
            href="#"
            className="
              hidden sm:inline-flex items-center gap-2
              px-5 py-2.5 rounded-full
              bg-[#3B5BDB] hover:bg-[#2F4AC3]
              text-white text-[14px] font-semibold
              shadow-[0_4px_20px_rgba(59,91,219,0.35)]
              hover:shadow-[0_4px_24px_rgba(59,91,219,0.5)]
              transition-all duration-300 hover:scale-105
            "
          >
            Get Started Free
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
