"use client";

import React from "react";
import { ZoomParallax } from "@/components/ui/zoom-parallax";

// TODO: Replace placeholder URLs with your own images
const images = [
    {
        src: "/files/photos/Kushal_Images/Kushal-landscape.jpeg",
        alt: "Kushal landscape image",
    },
    {
        src: "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.37.32.png",
        alt: "Anthyesti",
    },
    {
        src: "/files/photos/On the Back Burner/Screenshot (569).png",
        alt: "On the Back Burner",
    },
    {
        src: "/files/photos/Until We Dance Again/Still 2026-02-18 204336_1.1.2.png",
        alt: "Until we dance again",
    },
    {
        src: "/files/photos/Vendetta/000132770024.jpg",
        alt: "Vendetta",
    },
    {
        src: "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-23 at 22.00.29.png",
        alt: "Anthesthi 2",
    },

];

export default function Hero() {
    return (
        <section id="home">
            {/* Hero title overlay — visible as the sticky section starts */}
            <div className="relative flex h-screen items-center justify-center">
                <div className="absolute inset-0 bg-black" />
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-widest uppercase text-white font-light mb-6">
                        Kushal{" "}
                        <span className="font-semibold text-[#286976]">
                            Dhingra
                        </span>
                    </h1>
                    <p className="text-sm md:text-lg tracking-[0.3em] text-[#89898b] uppercase">
                        Director of Photography
                    </p>
                </div>
            </div>

            {/* Zoom Parallax gallery */}
            <ZoomParallax images={images} />
        </section>
    );
}
