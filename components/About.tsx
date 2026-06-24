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
                <p ref={textRef} className="text-2xl md:text-4xl lg:text-3xl leading-tight font-light text-[#ffffff] text-balance">
                    Hi, I'm Kushal, a cinematographer, filmmaker, and visual artist from India.
                    <br/><br/>
                    After graduating from Edinburgh Napier University in Scotland, I've been working across films, music videos, and commercial projects in both the UK and India. I'm drawn to stories about people, culture, and identity, and I love using visuals to bring emotion and atmosphere to the screen.
                    <br/><br/>
                    When I'm not behind the camera, I'm usually developing new film ideas, taking photographs, or searching for good light.
                </p>
            </div>
        </section>
    );
}
