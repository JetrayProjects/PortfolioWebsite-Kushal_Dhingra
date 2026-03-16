"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ProjectNavbar() {
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
        <nav className="fixed left-1/2 -translate-x-1/2 bottom-[4vh] md:top-[4vh] md:bottom-auto z-[100] transition-all duration-500">
            <div className="flex items-center gap-2 md:gap-4 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl">
                <Link 
                    href="/"
                    className="text-[#89898b] hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] md:text-xs font-medium mr-4"
                >
                    Back 
                </Link>

                <div className="w-[1px] h-4 bg-white/10 hidden md:block" />

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
        </nav>
    );
}
