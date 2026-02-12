import projects from "@/content/projects.json";
import Link from "next/link";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  // 1. Ambil ID dari URL dan tunggu (await) karena ini Next.js versi terbaru
  const { id } = await params;

  // 2. Cari proyek dengan konversi String untuk menghindari error tipe data
  const project = projects.find((p) => String(p.id) === String(id));

  // 3. Jika tidak ketemu, tampilkan pesan error yang informatif
  if (!project) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-red-400">Proyek ID "{id}" tidak ditemukan</h1>
        <p className="text-slate-400">Pastikan ID di projects.json adalah "{id}"</p>
        <Link href="/" className="text-blue-400 hover:underline mt-4">← Kembali ke Beranda</Link>
      </div>
    );
  }

  // 4. Jika ketemu, tampilkan halaman detail
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="text-blue-400 hover:underline mb-8 inline-block">
          ← Kembali ke Beranda
        </Link>

        <div className="mb-12">
          <span className="text-sm font-mono text-blue-400 uppercase tracking-widest px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
            {project.role}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-6">
            {project.title}
          </h1>
        </div>

        {/* Section Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Tentang Proyek</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.description}
              </p>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="p-6 border border-slate-800 rounded-2xl bg-slate-900/30">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Teknologi</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all"
            >
              Buka Proyek ↗
            </a>
          </aside>
        </div>
      </div>
      {/* --- SKILLS SECTION --- */}
<section className="mb-32">
  <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-mono tracking-widest uppercase">Design</span>
      <div className="flex gap-4 text-2xl font-bold">Figma • Adobe XD</div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-mono tracking-widest uppercase">Analysis</span>
      <div className="flex gap-4 text-2xl font-bold">Python • SQL • Tableau</div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-mono tracking-widest uppercase">Code</span>
      <div className="flex gap-4 text-2xl font-bold">Next.js • Tailwind</div>
    </div>
  </div>
</section>
    </main>
    
  );
}