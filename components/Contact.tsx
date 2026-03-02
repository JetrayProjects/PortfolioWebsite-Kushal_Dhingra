"use client";

import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <section id="contact" className="w-full bg-[#000000] py-32 px-8 md:px-16 text-[#ffffff] min-h-[80vh] flex flex-col justify-center border-t border-[#89898b]/10">
            <div className="max-w-3xl mx-auto w-full">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-widest mb-4">Let's Talk</h2>
                <p className="text-[#89898b] tracking-widest uppercase text-xs mb-16">Available for new projects</p>

                {status === "success" ? (
                    <div className="p-8 border border-[#286976]/30 bg-[#286976]/10 text-center">
                        <h3 className="text-2xl text-white font-light">Message Received</h3>
                        <p className="text-[#89898b] mt-2">I will get back to you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-2 flex flex-col items-start">
                                <label className="text-xs tracking-[0.2em] uppercase text-[#89898b]">Name</label>
                                <input required type="text" className="w-full bg-transparent border-b border-[#89898b]/30 py-4 outline-none focus:border-[#286976] transition-colors text-white text-lg placeholder:text-white/20" placeholder="Your name" />
                            </div>
                            <div className="space-y-2 flex flex-col items-start">
                                <label className="text-xs tracking-[0.2em] uppercase text-[#89898b]">Email</label>
                                <input required type="email" className="w-full bg-transparent border-b border-[#89898b]/30 py-4 outline-none focus:border-[#286976] transition-colors text-white text-lg placeholder:text-white/20" placeholder="your@email.com" />
                            </div>
                        </div>

                        <div className="space-y-2 flex flex-col items-start">
                            <label className="text-xs tracking-[0.2em] uppercase text-[#89898b]">Message</label>
                            <textarea required rows={4} className="w-full bg-transparent border-b border-[#89898b]/30 py-4 outline-none focus:border-[#286976] transition-colors text-white text-lg placeholder:text-white/20 resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="mt-8 px-12 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#286976] hover:text-white cursor-pointer transition-all duration-300 disabled:opacity-50"
                        >
                            {status === "submitting" ? "Sending..." : "Submit"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
