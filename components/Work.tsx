"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { workSections, Project } from "@/lib/data";

function ProjectRow({
    project,
    isHovered,
    isOthersHovered,
    onEnter,
    onLeave
}: {
    project: Project;
    isHovered: boolean;
    isOthersHovered: boolean;
    onEnter: () => void;
    onLeave: () => void;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); // Check on mount
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isHovered || isMobile) {
            videoRef.current?.play().catch(() => { });
        } else {
            videoRef.current?.pause();
        }
    }, [isHovered, isMobile]);

    return (
        <Link
            href={`/work/${project.id}`}
            className={cn(
                "block relative group w-full overflow-hidden border-t border-[#89898b]/20 last:border-b transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]",
                "aspect-square md:aspect-auto", // Square on mobile, height-based on desktop
                isHovered ? "md:h-[50vh]" : "md:h-[20vh]"
            )}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            {/* Background Media */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className={cn("absolute inset-0 bg-[#000000]/60 z-10 transition-opacity duration-700", (isHovered || isMobile) ? "opacity-30" : "opacity-80")} />

                {project.poster && (
                    <img
                        src={project.poster}
                        alt={project.title}
                        className={cn("absolute inset-0 w-full h-full object-cover transition-transform duration-1000", (isHovered || isMobile) ? "scale-100 opacity-0 md:opacity-100" : "scale-105")}
                    />
                )}

                {project.video && (
                    <video
                        ref={videoRef}
                        src={project.video}
                        loop
                        muted
                        playsInline
                        className={cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-700", (isHovered || isMobile) ? "opacity-100" : "opacity-0")}
                    />
                )}
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 w-full h-full flex flex-col justify-center px-8 md:px-16 pointer-events-none">
                <h3 className={cn("text-3xl md:text-5xl lg:text-7xl font-light tracking-widest uppercase transition-all duration-700 origin-left text-white", (!isMobile && isOthersHovered) ? "opacity-20 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100")}>
                    {project.title}
                </h3>


            </div>
        </Link>
    );
}

function SectionProjects({ projects }: { projects: Project[] }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    if (projects.length === 0) {
        return (
            <div className="flex-1 flex items-center justify-center border-y border-[#89898b]/20 text-[#89898b] uppercase tracking-[0.3em] text-xs">
                Coming Soon
            </div>
        );
    }

    return (
        <>
            {projects.map((project, index) => (
                <ProjectRow
                    key={project.id}
                    project={project}
                    isHovered={hoveredIndex === index}
                    isOthersHovered={hoveredIndex !== null && hoveredIndex !== index}
                    onEnter={() => setHoveredIndex(index)}
                    onLeave={() => setHoveredIndex(null)}
                />
            ))}
        </>
    );
}

export default function Work() {
    return (
        <section id="work" className="w-full bg-[#000000] py-24 flex flex-col min-h-screen">
            {workSections.map((section) => (
                <div key={section.title} className={cn("flex flex-col mb-32 last:mb-0")}>
                    <div className="px-8 md:px-16 pb-12">
                        <h2 className="text-sm md:text-lg lg:text-xl font-medium tracking-[0.3em] uppercase text-[#89898b]">{section.title}</h2>
                    </div>

                    <div className={cn("flex flex-col w-full", section.projects.length === 0 && "h-32")}>
                        <SectionProjects projects={section.projects} />
                    </div>
                </div>
            ))}
        </section>
    );
}
