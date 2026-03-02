"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(textRef.current,
            { autoAlpha: 0, y: 40 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            }
        );

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <section id="about-me" ref={containerRef} className="w-full bg-[#000000] py-32 px-8 md:px-16 text-[#ffffff] flex items-center justify-center min-h-[70vh]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#89898b] mb-12">
                    About Me
                </h2>
                <p ref={textRef} className="text-2xl md:text-4xl lg:text-5xl leading-tight font-light text-[#ffffff] text-balance">
                    Through the lens, I seek the unspoken narratives of life. My visual approach blends stark cinematic realism with a refined, meticulous eye for light, shadow, and emotion.
                </p>
            </div>
        </section>
    );
}
