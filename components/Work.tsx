"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "Antyesthi",
        director: "Jessica Sadana",
        video: "/files/videos/Antyesthi/Anthyesti clip.mp4",
        poster: "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-24 at 21.40.06.png",
    },
    {
        id: 2,
        title: "On the Back Burner",
        director: "Ishaan Nair",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: "/files/photos/On the Back Burner/Screenshot (549).png",
    },
    {
        id: 3,
        title: "The Furnished Room",
        director: "Sharat Kataria",
        video: "/files/videos/Until We Dance Again/The furnished room clip.mp4",
        poster: "/files/photos/Until We Dance Again/Still 2026-02-18 204336_1.1.2.png",
    },
    {
        id: 4,
        title: "Vendetta",
        director: "Ishaan Nair",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: "/files/photos/Vendetta/IMG_2729.jpg",
    }
];

function ProjectRow({
    project,
    isHovered,
    isOthersHovered,
    onEnter,
    onLeave
}: {
    project: typeof projects[0];
    isHovered: boolean;
    isOthersHovered: boolean;
    onEnter: () => void;
    onLeave: () => void;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isHovered) {
            videoRef.current?.play().catch(() => { });
        } else {
            videoRef.current?.pause();
        }
    }, [isHovered]);

    return (
        <div
            className={cn(
                "relative group w-full overflow-hidden border-t border-[#89898b]/20 last:border-b transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]",
                isHovered ? "flex-[2.5]" : isOthersHovered ? "flex-[0.5]" : "flex-1"
            )}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            {/* Background Media */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className={cn("absolute inset-0 bg-[#000000]/60 z-10 transition-opacity duration-700", isHovered ? "opacity-30" : "opacity-80")} />

                <img
                    src={project.poster}
                    alt={project.title}
                    className={cn("absolute inset-0 w-full h-full object-cover transition-transform duration-1000", isHovered ? "scale-100" : "scale-105")}
                />

                <video
                    ref={videoRef}
                    src={project.video}
                    loop
                    muted
                    playsInline
                    className={cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-700", isHovered ? "opacity-100" : "opacity-0")}
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 w-full h-full flex flex-col justify-center px-8 md:px-16 pointer-events-none">
                <h3 className={cn("text-3xl md:text-5xl lg:text-7xl font-light tracking-widest uppercase transition-all duration-700 origin-left text-white", isOthersHovered ? "opacity-20 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100")}>
                    {project.title}
                </h3>

                <div className={cn("overflow-hidden transition-all duration-700", isHovered ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0")}>
                    <p className="text-[#286976] tracking-[0.2em] uppercase text-sm font-semibold">
                        Director: <span className="text-[#89898b] font-light">{project.director}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Work() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="work" className="w-full bg-[#000000] py-24 flex flex-col min-h-screen">
            <div className="px-8 md:px-16 pb-12">
                <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#89898b]">Selected Works</h2>
            </div>

            <div className="flex flex-col w-full h-[70vh] md:h-[80vh]">
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
            </div>
        </section>
    );
}
