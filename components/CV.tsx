import Link from "next/link";

export default function CV() {
    return (
        <section id="cv" className="w-full bg-[#000000] py-40 px-8 md:px-16 text-[#ffffff] flex justify-center items-center">
            <Link 
                href="/files/photos/Kushal_Images/Kushal-Dhingra-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-item relative inline-flex group rounded-full p-[8px] hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transform-gpu"
            >
                {/* Border mask layer isolated to prevent scaling flicker */}
                <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                    <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#111111_0%,#ffffff_50%,#111111_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <span className="relative z-10 flex items-center gap-6 px-12 py-6 w-full h-full rounded-full bg-black group-hover:bg-[#0a0a0a] transition-colors duration-500">
                    <span className="text-sm md:text-lg tracking-[0.3em] uppercase font-medium text-[#d1d1d1] group-hover:text-white transition-colors duration-500">View Curriculum Vitae</span>
                    <span className="text-2xl text-[#89898b] group-hover:text-white group-hover:translate-x-3 transition-all duration-500">→</span>
                </span>
            </Link>
        </section>
    );
}
