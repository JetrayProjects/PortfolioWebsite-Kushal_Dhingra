"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/data";

export default function ProjectNavbar({ prev, next }: { prev?: Project | null; next?: Project | null }) {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "stills", "movie"];
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            {/* Desktop Fixed Side Arrows */}
            <div className="hidden md:block">
                {prev && (
                    <Link 
                        href={`/work/${prev.id}`} 
                        className="fixed top-1/2 left-4 md:left-8 -translate-y-1/2 z-[100] group flex items-center gap-4 transition-opacity hover:opacity-70"
                    >
                        <span className="text-4xl lg:text-6xl font-light text-white transition-transform duration-700 ease-out group-hover:-translate-x-2">&lt;</span>
                        <span className="text-sm lg:text-lg font-light uppercase tracking-widest text-white opacity-0 -translate-x-4 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">{prev.title}</span>
                    </Link>
                )}
                {next && (
                    <Link 
                        href={`/work/${next.id}`} 
                        className="fixed top-1/2 right-4 md:right-8 -translate-y-1/2 z-[100] group flex items-center gap-4 transition-opacity hover:opacity-70"
                    >
                        <span className="text-sm lg:text-lg font-light uppercase tracking-widest text-white opacity-0 translate-x-4 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">{next.title}</span>
                        <span className="text-4xl lg:text-6xl font-light text-white transition-transform duration-700 ease-out group-hover:translate-x-2">&gt;</span>
                    </Link>
                )}
            </div>

            <nav className="fixed left-1/2 -translate-x-1/2 bottom-[4vh] md:top-[4vh] md:bottom-auto z-[100] transition-all duration-500 flex gap-2 md:gap-4 items-center">
                {/* Mobile Prev Arrow */}
                {prev && (
                    <Link 
                        href={`/work/${prev.id}`} 
                        className="md:hidden flex items-center justify-center w-[40px] h-[40px] shrink-0 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl text-white transition-colors text-lg font-light"
                    >
                        &lt;
                    </Link>
                )}

                <Link 
                    href="/"
                    className="flex items-center justify-center px-6 py-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl text-[#89898b] hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] md:text-xs font-medium shrink-0"
                >
                    Back 
                </Link>

                <div className="flex items-center gap-2 md:gap-4 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl shrink-0">

                <button 
                    onClick={(e) => scrollTo('about', e)}
                    className={cn(
                        "uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-300 font-medium",
                        activeSection === 'about' ? "text-white" : "text-[#89898b] hover:text-white"
                    )}
                >
                    About
                </button>
                <div className="w-[1px] h-4 bg-white/10" />
                <button 
                    onClick={(e) => scrollTo('stills', e)}
                    className={cn(
                        "uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-300 font-medium",
                        activeSection === 'stills' ? "text-white" : "text-[#89898b] hover:text-white"
                    )}
                >
                    Stills
                </button>
                <div className="w-[1px] h-4 bg-white/10" />
                <button 
                    onClick={(e) => scrollTo('movie', e)}
                    className={cn(
                        "uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-300 font-medium",
                        activeSection === 'movie' ? "text-white" : "text-[#89898b] hover:text-white"
                    )}
                >
                    Movie
                </button>
            </div>

            {/* Mobile Next Arrow */}
            {next && (
                <Link 
                    href={`/work/${next.id}`} 
                    className="md:hidden flex items-center justify-center w-[40px] h-[40px] shrink-0 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl text-white transition-colors text-lg font-light"
                >
                    &gt;
                </Link>
            )}
        </nav>
        </>
    );
}
