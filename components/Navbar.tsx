"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-300",
            scrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
        )}>
            <div className="flex items-center gap-6">
                <div className="text-xl tracking-widest uppercase font-semibold text-white drop-shadow-lg">
                    <Link href="#home">Kushal Dhingra</Link>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://www.instagram.com/kushal.dhingra.758/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" aria-label="Instagram">
                        <img src="/logo/instagram.png" alt="Instagram" className="w-5 h-5 object-contain" />
                    </a>
                    <a href="https://www.imdb.com/name/nm13999679/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" aria-label="IMDb">
                        <img src="/logo/imdb.png" alt="IMDb" className="w-5 h-5 object-contain" />
                    </a>
                </div>
            </div>
            <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] text-[#89898b]">
                {['Home', 'About Me', 'Work', 'CV', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="hover:text-white transition-colors duration-300"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
