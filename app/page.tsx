"use client";

import projects from "@/content/projects.json";
import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, MessageCircle, X, ChevronRight } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Logika Filter Proyek
  const categories = ["All", "UI/UX", "Web Dev", "ML Engineer"];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.role === filter);

  if (!mounted) {
    return <div className="min-h-screen bg-[#020617]" />;
  }

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 relative overflow-hidden font-sans">
      
      {/* Spotlight Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Background Bintang Statis */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), 
                               radial-gradient(1px 1px at 150px 150px, #fff, rgba(0,0,0,0))`,
             backgroundSize: "250px 250px"
           }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-40 flex flex-col md:flex-row items-center gap-12">
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
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Available for work</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">
              Creative <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Developer.</span>
            </h1>
            <p className="text-xl text-slate-400 mt-6 max-w-2xl leading-relaxed">
              Halo! Saya <span className="text-white font-medium">Yehezkiel Rafhael</span>. 
              Menjembatani estetika desain <span className="text-white font-medium">UI/UX</span> dengan wawasan 
              <span className="text-white font-medium"> Data Analyst</span> untuk solusi digital yang cerdas.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={() => setIsOpen(true)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center gap-2 group"
              >
                Hubungi Saya
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#projects" className="px-8 py-3 bg-slate-800/50 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all active:scale-95">
                Lihat Proyek
              </a>
            </div>
          </motion.div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
              <p className="text-slate-500 mt-2">Kumpulan karya pilihan dalam desain dan analisis data.</p>
            </motion.div>

            {/* Filter Tabs */}
            <div className="flex bg-slate-900/40 p-1.5 rounded-2xl border border-slate-800/50 backdrop-blur-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                    filter === cat 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- CONNECT SECTION --- */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 mb-20"
        >
          <div className="p-8 md:p-20 bg-gradient-to-br from-blue-600/10 via-slate-900/50 to-transparent border border-white/5 rounded-[3rem] text-center backdrop-blur-3xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Mulai Proyek Baru?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Ingin mengubah data menjadi visual, atau butuh desain antarmuka yang intuitif? Mari kita wujudkan ide Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.linkedin.com/in/yehezkiel-rafhael/" target="_blank" className="px-8 py-4 bg-[#0a66c2]/10 border border-[#0a66c2]/20 text-white rounded-2xl hover:bg-[#0a66c2]/20 transition-all font-bold">
                LinkedIn
              </a>
              <a href="https://github.com/yzkielr" target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all font-bold">
                GitHub
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} YZK Portfolio — Crafted with Passion
          </p>
        </footer>
      </div>

      {/* --- MODAL HUBUNGI SAYA --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#020617]/80 backdrop-blur-md z-[100] flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 border border-white/10 w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative"
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white">Mari Berdiskusi</h3>
                  <p className="text-slate-400 text-sm mt-2">Pilih jalur komunikasi favorit Anda.</p>
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/6282114368729" // GANTI DENGAN NOMOR WA ANDA
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-green-500/5 border border-green-500/10 rounded-2xl hover:bg-green-500/10 transition-all group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                      <MessageCircle size={24} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-green-400">WhatsApp</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">Fast Response</p>
                    </div>
                  </a>

                  <a
                    href="mailto:yehezkielrafhael@email.com" // GANTI DENGAN EMAIL ANDA
                    className="flex items-center gap-4 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl hover:bg-blue-500/10 transition-all group"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-blue-400">Email</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">Formal Inquiry</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}