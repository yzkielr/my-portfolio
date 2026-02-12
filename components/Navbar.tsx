"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Jika belum mounted, jangan tampilkan animasi motion dulu
  if (!mounted) return null;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <div className="flex items-center gap-6 px-8 py-3 bg-slate-950/60 backdrop-blur-xl border border-slate-800 rounded-full shadow-2xl pointer-events-auto">
        <Link href="/" className="text-xs font-bold tracking-tighter text-white hover:text-blue-400 transition-colors">
          YZK.
        </Link>
        <div className="h-4 w-[1px] bg-slate-800"></div>
        <Link href="/" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">Home</Link>
        <Link href="#projects" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">Projects</Link>
        <a href="mailto:emailmu@gmail.com" className="text-xs font-bold text-white px-4 py-1.5 bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}