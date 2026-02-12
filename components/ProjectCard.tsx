"use client";

import Link from "next/link";
import { motion } from "framer-motion"; // Import motion

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Mulai dari transparan dan agak ke bawah
      whileInView={{ opacity: 1, y: 0 }} // Saat terlihat di layar, muncul dan naik
      viewport={{ once: true }} // Animasi hanya berjalan sekali
      transition={{ duration: 0.5 }} // Durasi animasi 0.5 detik
      whileHover={{ y: -10 }} // Saat kursor di atasnya, kartu naik sedikit
    >
      <Link href={`/project/${project.id}`} className="block h-full outline-none">
        <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full cursor-pointer flex flex-col shadow-xl">
          
          <div className="h-48 overflow-hidden relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            <div className="mb-3">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest px-2 py-1 bg-blue-500/10 rounded border border-blue-500/20">
                {project.role}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 mt-3 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((item: string) => (
                <span key={item} className="px-2 py-1 border border-slate-800 text-slate-500 text-[10px] rounded-md">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}