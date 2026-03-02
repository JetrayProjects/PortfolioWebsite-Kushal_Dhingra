"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experience = [
    { role: "Director of Photography", company: "Freelance", years: "2020 - Present" },
    { role: "Cinematographer", company: "Entourage Films", years: "2018 - 2020" },
    { role: "Camera Assistant", company: "Multiple Projects", years: "2015 - 2018" }
];

const education = [
    { degree: "B.A. Cinematography", school: "Film School Name", years: "2011 - 2015" }
];

export default function CV() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const elements = gsap.utils.toArray('.cv-item');

        elements.forEach((el, i) => {
            gsap.fromTo(el as HTMLElement,
                { autoAlpha: 0, y: 30 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el as HTMLElement,
                        start: "top 85%",
                    }
                }
            );
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <section id="cv" ref={sectionRef} className="w-full bg-[#000000] py-24 px-8 md:px-16 text-[#ffffff]">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Experience */}
                <div>
                    <h2 className="cv-item text-xs md:text-sm tracking-[0.3em] uppercase text-[#89898b] mb-12 border-b border-[#89898b]/20 pb-4">
                        Experience
                    </h2>
                    <div className="space-y-12">
                        {experience.map((exp, i) => (
                            <div key={i} className="cv-item flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-light tracking-wide">{exp.role}</h3>
                                    <p className="text-[#286976] tracking-widest uppercase text-xs mt-2 font-semibold">{exp.company}</p>
                                </div>
                                <div className="text-[#89898b] tracking-wider text-sm">
                                    {exp.years}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h2 className="cv-item text-xs md:text-sm tracking-[0.3em] uppercase text-[#89898b] mb-12 border-b border-[#89898b]/20 pb-4">
                        Education
                    </h2>
                    <div className="space-y-12">
                        {education.map((edu, i) => (
                            <div key={i} className="cv-item flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-light tracking-wide">{edu.degree}</h3>
                                    <p className="text-[#286976] tracking-widest uppercase text-xs mt-2 font-semibold">{edu.school}</p>
                                </div>
                                <div className="text-[#89898b] tracking-wider text-sm">
                                    {edu.years}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
