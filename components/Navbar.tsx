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
            <div className="text-xl tracking-widest uppercase font-semibold text-white">
                <Link href="#home">Kushal <span className="text-[#286976]">Dhingra</span></Link>
            </div>
            <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] text-[#89898b]">
                {['Home', 'Work', 'CV', 'About Me', 'Contact'].map((item) => (
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
