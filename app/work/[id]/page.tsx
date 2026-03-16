"use client";

import { use, useEffect } from "react";
import { notFound } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getProjectById } from "@/lib/data";
import ProjectNavbar from "@/components/ProjectNavbar";

// export function generateStaticParams() {
//     return workSections.flatMap((section) =>
//         section.projects.map((project) => ({
//             id: project.id,
//         }))
//     );
// }

export default function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = use(params);
    const project = getProjectById(resolvedParams.id);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Ensure images are fully loaded before calculating vh bounds
        const ctx = gsap.context(() => {
            if (project?.stills && project.stills.length >= 4) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#about", // Scrub based on About section scroll
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    }
                });

                const vh = window.innerHeight;
                const vw = window.innerWidth;

                // ===== SCREEN-RELATIVE IMAGE POSITIONS =====
                // Each image starts at a specific screen position and animates to its grid slot.
                // Positions are defined as fractions of the viewport (0-1).
                // Image 1 (idx 0): Top Right
                // Image 2 (idx 1): Top Left
                // Image 3 (idx 2): Bottom Right
                // Image 4 (idx 3): Center
                // Image 5 (idx 4): Bottom Left
                const screenPositions = [
                    { screenX: 0.80, screenY: 0.10, rotation: -8,  scale: 1.0 },  // Top Right
                    { screenX: 0.15, screenY: 0.10, rotation: 12,  scale: 1.0 },  // Top Left
                    { screenX: 0.80, screenY: 0.80, rotation: 3,   scale: 1.0 },  // Bottom Right
                    { screenX: 0.50, screenY: 0.45, rotation: -5,  scale: 1.0 },  // Center
                    { screenX: 0.15, screenY: 0.80, rotation: -15, scale: 1.0 },  // Bottom Left
                ];

                const indicesToAnimate = [0, 1, 2, 3, 4];

                indicesToAnimate.forEach((idx) => {
                    const el = document.getElementById(`stills-img-${idx}`);
                    if (!el) return;

                    const rect = el.getBoundingClientRect();
                    const elCenterX = rect.left + rect.width / 2;
                    const elCenterY = rect.top + rect.height / 2;

                    const config = screenPositions[idx];

                    // Target screen position in pixels (center of the image should land here)
                    const targetScreenX = config.screenX * vw;
                    const targetScreenY = config.screenY * vh;

                    // Offset = where we want the image to be minus where it naturally is
                    const startX = targetScreenX - elCenterX;
                    const startY = targetScreenY - elCenterY;

                    tl.fromTo(el,
                        { x: startX, y: startY, rotation: config.rotation, scale: config.scale, opacity: 0.2 },
                        { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
                        0
                    );
                });
            }
        });

        return () => ctx.revert();
    }, [project]);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#000000] font-serif overflow-hidden relative">
            <ProjectNavbar />

            {/* About Section (z-20 so it sits above Stills structurally during the overlap) */}
            <section
                id="about"
                className="w-full min-h-screen flex flex-col justify-center items-center relative z-20 px-8 md:px-16 pt-32 pb-24 pointer-events-none"
            >
                <div className="absolute inset-0 bg-transparent z-0" />

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-widest uppercase mb-16 mix-blend-difference text-white">
                        {project.title}
                    </h1>

                    <div className="space-y-8 text-lg md:text-2xl lg:text-3xl font-light leading-relaxed max-w-4xl text-balance">
                        {project.about?.map((paragraph, idx) => (
                            <p key={idx} className="text-white pointer-events-auto drop-shadow-lg">{paragraph}</p>
                        ))}
                        {(!project.about || project.about.length === 0) && (
                            <p className="text-white pointer-events-auto">Overview coming soon.</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Stills Section (z-10) */}
            <section id="stills" className="w-full min-h-screen bg-transparent px-4 md:px-16 py-24 relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#89898b] mb-16 text-center mt-[10vh]">
                        Stills
                    </h2>

                    {project.stills && project.stills.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-start">
                            {project.stills.map((still, idx) => (
                                <div
                                    key={idx}
                                    id={`stills-img-${idx}`}
                                    className="break-inside-avoid relative overflow-hidden bg-black/50 rounded-sm"
                                >
                                    <img
                                        src={still}
                                        alt={`${project.title} still ${idx + 1}`}
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-[40vh] border border-[#89898b]/20 rounded-md">
                            <p className="text-[#89898b] uppercase tracking-[0.2em] text-xs">Stills coming soon</p>
                            <p className="text-[#89898b]/50 mt-4 text-sm font-light">(Waiting on imagery from the director)</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Movie Section */}
            <section id="movie" className="w-full min-h-[90vh] bg-[#000000] flex flex-col items-center justify-center px-4 md:px-16 py-24 relative z-10 pb-40">
                <div className="w-full max-w-[1400px] mx-auto">
                    <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#89898b] mb-12 text-center">
                        The Film
                    </h2>

                    <div className="relative w-full aspect-video bg-black/50 border border-[#89898b]/20 rounded-lg overflow-hidden flex items-center justify-center shadow-2xl">
                        {project.movieUrl ? (
                            // Determine if YouTube, Vimeo, or raw MP4 later. For now, assuming raw video
                            <video
                                src={project.movieUrl}
                                controls
                                poster={project.poster}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="flex flex-col items-center text-center p-8">
                                <span className="text-4xl text-[#89898b]/30 mb-4 block">▹</span>
                                <p className="text-[#89898b] uppercase tracking-[0.2em] text-xs">Video coming soon</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
