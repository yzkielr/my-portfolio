"use client";

import projects from "@/content/projects.json";
import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Memastikan komponen sudah terpasang di browser sebelum menjalankan animasi
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#020617]" />;
  }

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 relative overflow-hidden">
      
      {/* Background Bintang Statis */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), 
                               radial-gradient(1px 1px at 150px 150px, #fff, rgba(0,0,0,0))`,
             backgroundSize: "300px 300px"
           }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-32 flex flex-col md:flex-row items-center gap-12">
          {/* Foto Profil dengan Efek Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 flex-shrink-0"
          >
             <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
             <div className="relative w-48 h-48 rounded-3xl border-2 border-slate-700 overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <img 
                  src="/profil.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200?text=YZK"; }} 
                />
             </div>
          </motion.div>

          {/* Teks Perkenalan */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">
              Creative <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Developer.</span>
            </h1>
            <p className="text-xl text-slate-400 mt-6 max-w-2xl leading-relaxed">
              Halo! Saya seorang <span className="text-white font-medium">UI/UX Designer</span> & <span className="text-white font-medium">Data Analyst</span>. 
              Saya menggabungkan estetika desain dengan wawasan data untuk menciptakan solusi digital yang berdampak.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="mailto:emailmu@gmail.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                Hubungi Saya
              </a>
              <a href="#projects" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all active:scale-95">
                Lihat Proyek
              </a>
            </div>
          </motion.div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            <div className="h-[1px] flex-grow bg-slate-800/50"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* --- CONNECT SECTION (FOOTER) --- */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 mb-20"
        >
          <div className="p-8 md:p-16 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent border border-blue-500/10 rounded-[2.5rem] text-center backdrop-blur-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mulai Proyek Baru?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Apakah Anda memiliki ide yang ingin diwujudkan atau butuh bantuan dalam analisis data? Mari kita bicara.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.linkedin.com/in/yehezkiel-rafhael/" target="_blank" className="px-8 py-3 bg-slate-900/50 border border-slate-800 text-white rounded-2xl hover:border-blue-500 transition-all hover:text-blue-400 shadow-xl">
                LinkedIn
              </a>
              <a href="https://github.com/yzkielr" target="_blank" className="px-8 py-3 bg-slate-900/50 border border-slate-800 text-white rounded-2xl hover:border-blue-500 transition-all hover:text-blue-400 shadow-xl">
                GitHub
              </a>
            </div>
          </div>
        </motion.section>

        {/* Mini Footer */}
        <footer className="pt-8 border-t border-slate-900/50 text-center">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} YZK Portfolio — Built with Next.js & Framer Motion
          </p>
        </footer>

      </div>
    </main>
  );
}